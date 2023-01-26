import React from "react";
import ReactPlayer from "react-player/youtube";

function App() {

  const vidUrl = "https://www.youtube.com/watch?v=Dw0irOIJYnA";

  return (
    <div className='App'>
      <h1>React Player example</h1>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  );
}

export default App;
