import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import './VideoFooter.css';

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className={'video-footer'}>
      <div className="video-footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video-footer__ticker">
          <MusicNoteIcon className={'video-footer__icon'}/>
          <Ticker mode={'smooth'}>
            {({index}) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src="https://static.thenounproject.com/png/934821-200.png" alt="" className={'video-footer__record'}/>
    </div>
  );
};

export default VideoFooter;
