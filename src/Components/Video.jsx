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
        poster="https://static.spotapps.co/web/gallostaproompowell--com/custom/video_poster_new.jpg"
        className="w-full h-[300px] md:h-[500px] lg:h-full object-cover relative inset-0 z-0"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
