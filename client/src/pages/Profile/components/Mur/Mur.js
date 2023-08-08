import React from "react";






import Walls from "./components/Walls/Walls";
import Gallery from "./components/Gallery/Gallery";
import VideoProfile from "./components/VideoProfile/VideoProfile";
import MusicProfile from "./components/MusicProfile/MusicProfile";

function Mur() {
  return (
    
      <div>
        <Walls/>
        <Gallery/>
        <VideoProfile />
        <MusicProfile />
      </div>
    
  );
}

export default Mur;
