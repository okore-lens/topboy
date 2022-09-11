import React, { useEffect, useState } from "react";
import ServicesCard from "../../../cards/ServicesCard/ServicesCard";

import "./Services.scss";

function Services() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const response = await fetch(
      "https://topboy-nation-default-rtdb.europe-west1.firebasedatabase.app/Services.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const responseData = await response.json();

    const loadedServices = [];

    for (const key in responseData) {
      loadedServices.push({
        id: key,
        name: responseData[key].serviceName,
        description: responseData[key].serviceDescription,
      });
    }
    setServices(loadedServices);
  };

  useEffect(() => {
    fetchServices().catch((error) => {
      alert(error.message);
    });
  }, []);

  return (
    <div className="Services">
      <h3>SERVICES WE OFFER</h3>
      {services.map((service) => (
        <div key={service.id} id={`${service.id}`}>
          <ServicesCard
            title={service.name}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Services;
