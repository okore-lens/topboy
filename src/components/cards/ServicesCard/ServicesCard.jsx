import React from "react";
import ServicesImgCard from "../servicesImgCard/ServicesImgCard";
// <<<<<<< HEAD
// import image from "../../../assets/images/services-img.png";
import imageArray from "../../../assets/arrays/serviceImgArray";
// =======
import imagelist from "../../../assets/arrays/memoryArray";
// >>>>>>> 10f47745bc65016f29635e1894730db5ab27c76c

import "./ServicesCard.scss";

function ServicesCard(props) {
  console.log(props);
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
