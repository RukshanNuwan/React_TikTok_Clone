import {useEffect, useState} from "react";
import Video from "./components/Video";
import Axios from "./api/axios";
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Axios.get('/v2/posts');
    setVideos(response.data);
  };

  return (
    <div className="app">
      <div className="app__steps">
        <p>Scroll up/down the video to move another one</p>
        <p>Click to play/pause</p>
      </div>
      <div className="app__videos">
        {videos.map((video, index) => (
          <Video
            key={index}
            video_url={video.video_url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
