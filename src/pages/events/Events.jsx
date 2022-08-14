import React from "react";
import EventCard from "../../components/cards/eventCard/EventCard";

import "./Events.scss";

function Events() {
  return (
    <div className="Events">
      <h2>UPCOMING EVENTS</h2>
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export default Events;
