import React, { useState, useEffect } from "react";
import imagelist from "../../assets/arrays/memoryArray";
import EventCard from "../../components/cards/eventCard/EventCard";

import "./Events.scss";

function Events() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const response = await fetch(
      "https://topboy-nation-default-rtdb.europe-west1.firebasedatabase.app/Events.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const responseData = await response.json();

    const loadedEvents = [];

    for (const key in responseData) {
      loadedEvents.push({
        id: key,
        day: responseData[key].day,
        location: responseData[key].location,
        month: responseData[key].month,
        name: responseData[key].venueName,
      });
    }
    setEvents(loadedEvents);
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
    <div className="Events">
      <h2>UPCOMING EVENTS</h2>

      {events.map((event) => (
        <div key={event.id} className="event">
          <EventCard
            day={event.day}
            month={event.month}
            location={event.location}
            venueName={event.name}
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
