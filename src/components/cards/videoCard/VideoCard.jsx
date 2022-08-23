import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "./VideoCard.scss";

function VideoCard(props) {
  return (
    <div className="VideoCard">
      <iframe
        width="100%"
        height="315px"
        src={props.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <div className="wrapper">
        <h3>TopBoy Nation Afro Chill Vibes VOL 1</h3>
        <div className="center">
          <FontAwesomeIcon icon={faPlay} className="icon" />
        </div>
      </div> */}
    </div>
  );
}

export default VideoCard;
