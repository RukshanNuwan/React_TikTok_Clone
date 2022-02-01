import {useRef, useState} from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import './Video.css';

const Video = ({video_url, channel, description, song, likes, messages, shares}) => {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const videoPressHandler = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={'video'}>
      <video
        src={video_url}
        loop={true}
        className={'video__player'}
        ref={videoRef}
        onClick={videoPressHandler}
      />
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  );
};

export default Video;
