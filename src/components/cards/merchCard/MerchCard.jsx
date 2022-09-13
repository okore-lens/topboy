import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../context/cartContext";

import "./MerchCard.scss";

function MerchCard(props) {
  // addContext
  const cartCtx = useContext(CartContext);

  const addHandler = (ev) => {
    ev.preventDefault();
    const item = {
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    };
    cartCtx.addItem(item);
  };

  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <form className="cartfunc">
        <p>KShs. {props.price}</p>
        <button onClick={addHandler}>Add to Cart</button>
      </form>
    </div>
  );
}

export default MerchCard;
