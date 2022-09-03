import React, { useState } from "react";

import "./CheckOutCard.scss";

const CheckOutCard = ({ checkOutForm }) => {
  const [total, setTotal] = useState(0);
  console.log(checkOutForm);
  console.log("Opened");
  const changeHandler = (ev) => {
    let totalPrice = ev.target.value * checkOutForm.price;
    setTotal(totalPrice);
  };
  return (
    <div className="CheckOutCard">
      <div className="image">
        <img src={checkOutForm.image} />
      </div>
      <div className="description">{checkOutForm.title}</div>
      <div className="total">
        <input
          onChange={changeHandler}
          defaultValue={checkOutForm.number}
          type="number"
          step="1"
          min="1"
        />
      </div>
      <div className="amount">{total}</div>
    </div>
  );
};

export default CheckOutCard;
