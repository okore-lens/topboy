import React, { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import CartItem from "./CartItem";

import "./Cart.scss";

const Cart = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState(null);

  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const itemList = (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          price={item.price}
          amount={item.amount}
          onRemove={removeHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const clearCartHandler = () => {
    cartCtx.clearCart();
    setClicked(false);
  };

  const proceedHandler = () => {
    setClicked(true);
    const cart = cartCtx.items;
    let list = cart.map((item) => (
      <li key={item.id}>
        <span>{item.amount}</span>
        <span>{item.title}</span> ::
        <span>{item.price * item.amount}</span>
      </li>
    ));
    setText(list);
  };

  return (
    <div className="Cart">
      <h2>Cart Contents</h2>
      {itemList}
      <div className="buttons">
        <button className="clear" onClick={clearCartHandler}>
          Clear Cart
        </button>
        <button onClick={proceedHandler}>Proceed To Order!</button>
      </div>
      {clicked && (
        <div className="proceed">
          <div className="preference">
            <div className="order">
              <h2>Order the following:</h2>
              <ul>{text}</ul>
            </div>
            <form>
              <textarea placeholder="Add Preference i.e  medium sized grey hoodie" />
            </form>
          </div>
          <button onClick={proceedHandler}>ORDER</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
