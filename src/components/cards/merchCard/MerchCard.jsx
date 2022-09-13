import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../context/cartContext";

import "./MerchCard.scss";

function MerchCard(props) {
  const [formInput, setFormInput] = useState(1);
  const changeHandler = (ev) => {
    setFormInput(ev.target.value);
  };

  // addContext
  const cartCtx = useContext(CartContext);

  const addHandler = (ev) => {
    ev.preventDefault();
    const item = {
      id: props.id,
      title: props.title,
      amount: formInput,
      price: props.price,
    };
    cartCtx.addItem(item);
    console.log(item);
  };

  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <form className="cartfunc">
        <p>KShs. {props.price}</p>
        <input
          value={formInput}
          onChange={changeHandler}
          type="number"
          min="1"
          step="1"
        />
        <button onClick={addHandler}>Add to Cart</button>
      </form>
    </div>
  );
}

export default MerchCard;
