import React from "react";

import "./MerchCard.scss";

function MerchCard(props) {
  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <p>KShs. {props.price}</p>
    </div>
  );
}

export default MerchCard;
