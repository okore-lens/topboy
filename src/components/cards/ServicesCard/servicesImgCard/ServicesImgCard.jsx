import React from "react";
// import image from "../../../assets/images/services-img.png";

import "./ServicesImgCard.scss";

function ServicesImgCard(props) {
  return (
    <div className="ServicesImgCard">
      <img src={props.image} />
    </div>
  );
}

export default ServicesImgCard;
