import React, { useState } from "react";

import Filter from "../Filter/Filter";
import Walls from "./components/Walls/Walls";
import Gallery from "./components/Gallery/Gallery";
import VideoProfile from "./components/VideoProfile/VideoProfile";
import MusicProfile from "./components/MusicProfile/MusicProfile";

function Mur() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div className="d-flex" >
      <Filter onFilterChange={handleFilterChange} />
      <div className="flex-grow-1">
        {(activeFilter === "ALL" || activeFilter === "Walls") && (
          <div>
            <Walls />
          </div>
        )}
        {(activeFilter === "ALL" || activeFilter === "Gallery") && (
          <div>
            <Gallery />
          </div>
        )}
        {(activeFilter === "ALL" || activeFilter === "Video") && (
          <div>
            <VideoProfile />
          </div>
        )}
        {(activeFilter === "ALL" || activeFilter === "Music") && (
          <div>
            <MusicProfile />
          </div>
        )}
      </div>
    </div>
  );
}

export default Mur;
