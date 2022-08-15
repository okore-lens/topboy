import {
  faDownload,
  faMusic,
  faPause,
  faPlay,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./AudioCard.scss";

function AudioCard() {
  return (
    <div className="AudioCard">
      <div className="text">
        <FontAwesomeIcon icon={faMusic} className="icon" />
        <p>TopBoy Nation Afro Chill Vibes VOL 1</p>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faPlay} className="icon" />
        <FontAwesomeIcon icon={faPause} className="icon" />
        <FontAwesomeIcon icon={faShareAlt} className="icon" />
        <button>
          <FontAwesomeIcon icon={faDownload} className="icon" />
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}

export default AudioCard;
