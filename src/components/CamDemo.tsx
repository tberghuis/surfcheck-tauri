import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { useStore } from "../store";
import "../css/cam-container.css";
import axios from "axios";
import clsx from "clsx";

function CamDemo() {
  const [show404, setShow404] = useState(false);

  const currentCam = useStore((state) => state.currentCam);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("CamDemo useEffect currentCam", currentCam);
    // this is probably bad but it works
    const hls = new Hls();
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoRef.current && videoRef.current.play();
    });

    hls.loadSource(currentCam.url);
    videoRef.current && hls.attachMedia(videoRef.current);
  }, [currentCam, videoRef.current]);

  useEffect(() => {
    let isSubscribed = true;
    const checkHLSActive = async () => {
      try {
        let res = await axios.head(currentCam.url);
        console.log("checkHLSActive", res.status);
        return /2\d\d/.test("" + res.status);
      } catch (err) {
        console.log("checkHLSActive err", currentCam.url, err);
        if (isSubscribed) {
          setShow404(true);
        }
      }
    };
    checkHLSActive();
    return () => {
      isSubscribed = false;
      setShow404(false);
    };
  }, [currentCam]);

  return (
    <div className="cam-container">
      {show404 && (
        <div>
          {currentCam.name} {currentCam.url} 404
        </div>
      )}
      {/* below did not work for some reason */}
      {/* {!show404 && <video ref={videoRef}></video>} */}
      <video className={clsx({ none: show404 })} ref={videoRef}></video>
    </div>
  );
}

export default CamDemo;
