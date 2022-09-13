import React, { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    console.log(item.title, item.amount);
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
  };

  return (
    <div className="Cart">
      <h2>Cart Contents</h2>
      {itemList}
      <div>
        <button onClick={clearCartHandler}>Clear Cart</button>
        <button>Proceed To Order!</button>
      </div>
    </div>
  );
};

export default Cart;
