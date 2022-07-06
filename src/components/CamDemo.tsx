import { useRef, useEffect } from "react";
import Hls from "hls.js";

function CamDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("effect");
    var hls = new Hls();
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoRef.current && videoRef.current.play();
    });
    hls.loadSource(
      "https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8"
    );
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
