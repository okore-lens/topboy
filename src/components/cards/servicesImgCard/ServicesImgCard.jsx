import React from "react";
import image from "../../../assets/images/services-img.png";

import "./ServicesImgCard.scss";

function ServicesImgCard() {
  return (
    <div className="ServicesImgCard">
      <img src={image} />
    </div>
  );
}

export default ServicesImgCard;
