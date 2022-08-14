import React from "react";
import ServicesCard from "../../components/cards/ServicesCard/ServicesCard";

import "./Services.scss";

function Services() {
  return (
    <div className="Services">
      <h3>SERVICES WE OFFER</h3>
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  );
}

export default Services;
