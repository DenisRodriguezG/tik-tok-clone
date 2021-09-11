import { useState, useEffect } from 'react';
import db from './firebase';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => (
      setVideos([snapshot.docs.map(doc => doc.data())])
    ))
  }, [])
  console.log(videos)
  return (
    <div className="App">
      <div className="app__videos">
        {

          videos.map((vide) => vide.map( video => (
            <Video url={video.url} channel={video.channel} description={video.description} song={video.song} likes={video.likes} messages={video.messages} shares={video.shares}/>
          )))}
      </div>
    </div>
  );
}

export default App;
