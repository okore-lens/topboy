import React from "react";
import ServicesImgCard from "../servicesImgCard/ServicesImgCard";
import imagelist from "../../../assets/arrays/memoryArray";

import "./ServicesCard.scss";

function ServicesCard(props) {
  return (
    <div className="ServicesCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="img-row">
        {imagelist.map((img) => (
          <div key={img.id} className="image">
            <ServicesImgCard image={img.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
