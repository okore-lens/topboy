import React, { useState } from "react";
import { useEffect } from "react";

import "./MerchCard.scss";

function MerchCard(props) {
  const [formInput, setFormInput] = useState(1);
  const changeHandler = (ev) => {
    setFormInput(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    // elementsArray.find(checkElement);
    let array = props.elements;
    if (array.includes(props.id)) return;
    props.item(props.id);
    props.clicked(true);
    props.totalAmount(formInput, props.price, props.title);
    props.checkOut(formInput, props.price, props.title, props.imgSrc, props.id);
  };

  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <form className="cartfunc" onSubmit={submitHandler}>
        <p>KShs. {props.price}</p>
        {/* <input
          value={formInput}
          onChange={changeHandler}
          type="number"
          min="1"
          step="1"
        /> */}
        <button>Add to Cart</button>
      </form>
    </div>
  );
}

export default MerchCard;
