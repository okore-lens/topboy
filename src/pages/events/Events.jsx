import React from "react";
import eventList from "../../assets/arrays/eventArray";
import imagelist from "../../assets/arrays/memoryArray";
import EventCard from "../../components/cards/eventCard/EventCard";

import "./Events.scss";

function Events() {
  const randomLength = () => {
    let y = Math.floor(Math.random() * 4 + 1);
    return y;
  };
  const randomWidth = () => {
    let x = Math.floor(Math.random() * 4 + 1);
    return x;
  };
  return (
    <div className="Events">
      <h2>UPCOMING EVENTS</h2>
      {eventList.map((event) => (
        <div key={event.id} className="event">
          <EventCard
            day={event.day}
            month={event.month}
            location={event.location}
            venueName={event.venueName}
          />
        </div>
      ))}

      <h2>MEMORIES</h2>
      <div className="image-section">
        {imagelist.map((img) => (
          <div
            className={`image-container w-${randomWidth()} h-${randomLength()}`}
            key={img.id}
          >
            <div className="image-item">
              <div className="image">
                <img src={img.src} />
              </div>
              <div className="text">{img.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
