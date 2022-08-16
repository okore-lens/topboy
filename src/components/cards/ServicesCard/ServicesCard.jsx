import React from "react";
import ServicesImgCard from "../servicesImgCard/ServicesImgCard";
import image from "../../../assets/images/services-img.png";
import imageArray from "../../../assets/arrays/serviceImgArray";

import "./ServicesCard.scss";

function ServicesCard(props) {
  console.log(props);
  return (
    <div className="ServicesCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="img-row">
        {imageArray.map((img) => (
          <ServicesImgCard image={img} />
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
