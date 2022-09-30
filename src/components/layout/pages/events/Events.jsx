import React, { useState, useEffect } from "react";
import imagelist from "../../../../assets/arrays/memoryArray";
import EventCard from "../../../cards/eventCard/EventCard";

import "./Events.scss";

function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchEvents() {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/store/event");
      const responseData = await response.json();
      setEvents(responseData.events);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchEvents().catch((error) => {
      alert(error.message);
    });
  }, []);

  console.log(events);

  const randomLength = () => {
    let y = Math.floor(Math.random() * 4 + 1);
    return y;
  };
  const randomWidth = () => {
    let x = Math.floor(Math.random() * 4 + 1);
    return x;
  };
  return (
    <div className="Events-wrapper">
      <div className="Events">
        <h2>UPCOMING EVENTS</h2>

        {events.map((event) => (
          <div key={event.id} className="event">
            <EventCard
              day={event.dayMonth}
              // month={event.dayMonth}
              location={event.location}
              venueName={event.name}
              poster={event.poster}
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
    </div>
  );
}

export default Events;
