import React, { useContext, useEffect, useState } from "react";
import merchList from "../../../../assets/arrays/merchArray";
import CartContext from "../../../../context/cartContext";
import MerchCard from "../../../cards/merchCard/MerchCard";
import Cart from "../../../Cart/Cart";
import CartIcon from "../../../Cart/CartIcon";

import "./Merch.scss";

function Merch() {
  const [clicked, setClicked] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusText, setStatusText] = useState(null);

  // Cart Context
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.length;

  const clickHandler = () => {
    setClicked(true);
  };
  const modalHandler = () => {
    setClicked(false);
  };

  const statusHandler = (item) => {
    setStatusText(`${item.title} has been added to the cart!!!`);
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };

  useState(() => {
    console.log("Called");
    if (numberOfCartItems < 1) {
      setClicked(false);
    }
  }, [items]);

  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
        <button onClick={clickHandler} className="cart">
          <span className="icon">
            <CartIcon />
          </span>
          <span>Cart</span>
          <span className="badge">{numberOfCartItems}</span>
        </button>
        <div className="content">
          {status && <div className="status">{statusText}</div>}
          <div className="merch-row">
            <div className="wrapper">
              {merchList.map((merch) => (
                <MerchCard
                  key={merch.id}
                  id={merch.id}
                  title={merch.title}
                  imgSrc={merch.imgSrc}
                  price={merch.price}
                  setStatus={statusHandler}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {clicked && (
        <div>
          <div onClick={modalHandler} className="blur"></div>
          <div className="check-out">
            <Cart></Cart>
          </div>
        </div>
      )}
    </div>
  );
}

export default Merch;
