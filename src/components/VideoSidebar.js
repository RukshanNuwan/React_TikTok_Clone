import {useState} from "react";
import {Favorite, FavoriteBorder, Message, Share} from "@mui/icons-material";
import './VideoSidebar.css';

const VideoSidebar = ({likes, messages, shares}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={'video-sidebar'}>
      <div className="video-sidebar__button">
        {liked ? (
          <Favorite fontSize={'large'} onClick={() => setLiked(false)}/>
        ) : (
          <FavoriteBorder fontSize={'large'} onClick={() => setLiked(true)}/>
        )}
        <p>{liked ? parseInt(likes) + 1 : likes}</p>
      </div>
      <div className="video-sidebar__button">
        <Message fontSize={'large'}/>
        <p>{messages}</p>
      </div>
      <div className="video-sidebar__button">
        <Share fontSize={'large'}/>
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
