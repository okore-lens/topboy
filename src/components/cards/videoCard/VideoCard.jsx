import React from "react";

import "./VideoCard.scss";

function VideoCard(props) {
  return (
    <div className="VideoCard">
      <iframe
        width="100%"
        height="500px"
        src={props.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoCard;
