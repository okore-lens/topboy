import React, { useState } from "react";

import "./MerchCard.scss";

function MerchCard(props) {
  const [formInput, setFormInput] = useState(1);
  // const [prev, setPrev] = useState(0);
  // const [amount, setAmount] = useState(0);

  const changeHandler = (ev) => {
    setFormInput(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    // console.log(`${props.title} has been selected ${formInput} times`);
    props.item(props.id);
    props.clicked(true);
    props.totalAmount(formInput, props.price, props.title);
    props.checkOut(formInput, props.price, props.title, props.imgSrc);
  };

  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <form className="cartfunc" onSubmit={submitHandler}>
        <p>KShs. {props.price}</p>
        <input
          value={formInput}
          onChange={changeHandler}
          type="number"
          min="1"
          step="1"
        />
        <button>Add to Cart</button>
      </form>
    </div>
  );
}

export default MerchCard;
