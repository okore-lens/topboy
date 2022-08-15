import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "./VideoCard.scss";

function VideoCard() {
  return (
    <div className="VideoCard">
      <div className="wrapper">
        <h3>TopBoy Nation Afro Chill Vibes VOL 1</h3>
        <div className="center">
          <FontAwesomeIcon icon={faPlay} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
