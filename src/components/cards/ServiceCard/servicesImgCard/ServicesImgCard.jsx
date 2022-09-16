import React from "react";
// import image from "../../../assets/images/services-img.png";

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
