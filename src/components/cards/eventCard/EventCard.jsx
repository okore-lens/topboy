import React from "react";
import image from "../../../assets/images/poster-img.png";
import iconLocation from "../../../assets/images/icon-location.png";
import iconShare from "../../../assets/images/icon-share.png";

import "./EventCard.scss";

function EventCard() {
  return (
    <div className="EventCard">
      <div className="date">
        <div className="wrapper">
          <div className="poster">
            <img src={image} />
          </div>
          <div className="day">Monday, 27</div>
          <div className="month">February</div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <h3>TOPBOY NATION GRILL</h3>
          <div className="icons">
            <a href="#">
              <img src={iconLocation} />
              <h4>Ruaka,Nairobi</h4>
            </a>{" "}
            <a href="#">
              <img src={iconShare} />
              <h4>Ruaka,Nairobi</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
