// import React from 'react';
import Video from '../assets/introaw.mp4'

const VideoBackgroundText = () => {
  return (
<>
    
<div className="relative">
      <div className="relative z-10 p-4 bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-3xl font-bold">Video Background Text</h1>
        <p className="text-lg">Your text here...</p>
        <video
          autoPlay
          muted
          loop
          className="mt-4 mx-auto w-1/2"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>



</>
  );
};

export default VideoBackgroundText;
