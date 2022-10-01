import React from "react";
import image from "../../../assets/images/about-img.png";
import iconLocation from "../../../assets/images/icon-location.png";
import iconShare from "../../../assets/images/icon-share.png";
import { getMonth } from "../../../middleware/months";

import "./EventCard.scss";

function EventCard(props) {

  const datesArray = props.day.split('-');
  const day = Number(datesArray[2]);
  const month = getMonth(Number(datesArray[1]));

  return (
    <div className="EventCard">
      <div className="date">
        <div className="wrapper">
          <div className="poster">
            <img src={`http://localhost:8000/images/${props.poster}`} />
          </div>
          <div className="day">{day}</div>
          <div className="month">{month}</div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <h3>{props.venueName}</h3>
          <div className="icons">
            <a href="#">
              <img src={iconLocation} />
              <h4>{props.location}</h4>
            </a>
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
