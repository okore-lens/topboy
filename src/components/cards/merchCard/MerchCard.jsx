import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../../../context/cartContext";

import "./MerchCard.scss";

function MerchCard(props) {
  const [showButtons, setShowButtons] = useState({
    itemButtons: false,
    addCart: true,
  });
  const [count, setCount] = useState(0);

  // addContext
  const cartCtx = useContext(CartContext);

  const addHandler = () => {
    setShowButtons({
      itemButtons: true,
      addCart: false,
    });
    const item = {
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    };
    cartCtx.addItem(item);
    props.setStatus(item);
    let newCount = count + 1;
    setCount(newCount);
  };

  const removeHandler = () => {
    let newCount = count - 1;
    if (count === 1) {
      setShowButtons({
        itemButtons: false,
        addCart: true,
      });
      cartCtx.removeItem(props.id);
      setCount(newCount);
      return;
    }
    cartCtx.removeItem(props.id);
    setCount(newCount);
  };

  useEffect(() => {}, []);

  return (
    <div className="MerchCard">
      <h4>{props.title}</h4>
      <div className="image">
        <img src={props.imgSrc} />
      </div>
      <div className="cartfunc">
        <p>KShs. {props.price}</p>
        {showButtons.addCart && (
          <button onClick={addHandler}>Add to Cart</button>
        )}
        {showButtons.itemButtons && (
          <div className="buttons">
            <button onClick={removeHandler}>- Reduce</button>
            <span>{count}</span>
            <button onClick={addHandler}>+ Add</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MerchCard;
