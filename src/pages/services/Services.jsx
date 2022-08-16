import React from "react";
import ServicesCard from "../../components/cards/ServicesCard/ServicesCard";
import serviceArray from "../../assets/arrays/serviceArray";

import "./Services.scss";

function Services() {
  return (
    <div className="Services">
      <h3>SERVICES WE OFFER</h3>
      {serviceArray.map((service) => (
        <div key={service.id} id={`${service.id}`}>
          <ServicesCard
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Services;
