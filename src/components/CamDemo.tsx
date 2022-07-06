import { useRef, useEffect } from "react";
import Hls from "hls.js";
import { useStore } from "../store";

function CamDemo() {
  const currentCam = useStore((state) => state.currentCam);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("effect");
    var hls = new Hls();
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoRef.current && videoRef.current.play();
    });
    hls.loadSource(currentCam.url);
    videoRef.current && hls.attachMedia(videoRef.current);
  }, []);

  return (
    <div>
      hello CamDemo
      <video ref={videoRef}></video>
    </div>
  );
}

export default CamDemo;
