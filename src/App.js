import Video from "./components/Video";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          video_url={'https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
          channel={'channel name - one'}
          description={'sample description - one'}
          song={'song - one'}
          likes={123}
          messages={23}
          shares={12}
        />
        <Video
          video_url={'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          channel={'channel name - two'}
          description={'sample description - two'}
          song={'song - two'}
          likes={345}
          messages={35}
          shares={43}
        />
      </div>
    </div>
  );
};

export default App;
