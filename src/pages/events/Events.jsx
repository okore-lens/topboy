import React from "react";
import imagelist from "../../assets/arrays/memoryArray";
import EventCard from "../../components/cards/eventCard/EventCard";

import "./Events.scss";

function Events() {
  const randomLength = () => {
    let y = Math.floor(Math.random() * 4 + 1);
    // console.log(y);
    return y;
  };
  const randomWidth = () => {
    let x = Math.floor(Math.random() * 4 + 1);
    // console.log(x);
    return x;
  };
  return (
    <div className="Events">
      <h2>UPCOMING EVENTS</h2>
      <EventCard />
      <EventCard />
      <EventCard />
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
