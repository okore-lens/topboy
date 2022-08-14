import React from "react";
import icon from "../../../assets/images/service-icon.png";
import arrow from "../../../assets/images/icon-arrow-right.png";

import "./ServiceCard.scss";

function ServiceCard() {
  return (
    <div className="ServiceCard">
      <div className="wrapper">
        <div className="image">
          <img src={icon} />
        </div>
        <h3>Service Offered</h3>
        <div className="arrow">
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
