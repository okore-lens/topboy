import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../../cards/serviceCard/ServiceCard";

const ServiceHome = () => {
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
    <div className="help">
      <div className="services">
        <div className="cover">
          <span className="text">HOW CAN WE HELP ?</span>
          <div className="services-row">
            <div className="wrapper">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={{ pathname: "/services", hash: `${service.id}` }}
                >
                  <ServiceCard name={service.name} className="service-card" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
