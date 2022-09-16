import React from "react";
import image from "../../../assets/images/about-img.png";
import iconLocation from "../../../assets/images/icon-location.png";
import iconShare from "../../../assets/images/icon-share.png";

import "./EventCard.scss";

function EventCard(props) {
  return (
    <div className="EventCard">
      <div className="date">
        <div className="wrapper">
          <div className="poster">
            <img src={image} />
          </div>
          <div className="day">{props.day}</div>
          <div className="month">{props.month}</div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <h3>{props.venueName}</h3>
          <div className="icons">
            <a href="#">
              <img src={iconLocation} />
              <h4>{props.location}</h4>
            </a>{" "}
            <a href="#">
              <img src={iconShare} />
              <h4>Share</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
