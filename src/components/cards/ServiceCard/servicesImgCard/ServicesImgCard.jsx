import React from "react";

import "./ServicesImgCard.scss";

function ServicesImgCard(props) {
  const handleClick = () => {
    console.log(props.image);
  };

  return (
    <div className="ServicesImgCard" onClick={handleClick}>
      <img src={props.image} />
    </div>
  );
}

export default ServicesImgCard;
