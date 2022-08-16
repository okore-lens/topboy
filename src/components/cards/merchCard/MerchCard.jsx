import React from "react";
import image from "../../../assets/images/merch.png";

import "./MerchCard.scss";

function MerchCard() {
  return (
    <div className="MerchCard">
      <h3>Title</h3>
      <div className="image">
        <img src={image} />
      </div>
      <p>Price</p>
    </div>
  );
}

export default MerchCard;
