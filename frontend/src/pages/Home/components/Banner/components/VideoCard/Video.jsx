import React, { useRef, useEffect } from "react";
import video from "../../../../../../assets/videos/Into-video.mp4";

export default function VideoPlayer({ onVideoEnd }) {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    onVideoEnd();
  };

  useEffect(() => {
    const currentVideo = videoRef.current;

    const handlePlay = () => {
      if (!currentVideo.controls) {
        currentVideo.controls = false;
      }
    };

    currentVideo.addEventListener("play", handlePlay);

    return () => {
      currentVideo.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <video
        ref={videoRef}
        title="video"
        className="h-full w-full object-cover"
        frameBorder="0"
        allowFullScreen
        autoPlay
        controls={false}
        controlsList="nodownload"
        onEnded={handleVideoEnd}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
