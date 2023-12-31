import React from 'react';
import video from '../assets/images/Gallops Video.mp4';

function Video() {
  return (
    <div>
      <video
        autoPlay
        id="coverVideo"
        loop
        muted
        playsInline
        preload="auto"
        poster="https://static.spotapps.co/web/gallostaproompowell--com/custom/video_poster_new.jpg"
        className="w-full h-[300px] md:h-[500px] lg:h-full object-cover relative inset-0 z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
