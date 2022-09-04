import React, { useState } from "react";
import { useEffect } from "react";

import "./CheckOutCard.scss";

const CheckOutCard = ({ checkOutForm, setItemToDelete }) => {
  const [total, setTotal] = useState(0);
  const changeHandler = (ev) => {
    let totalPrice = ev.target.value * checkOutForm.price;
    setTotal(totalPrice);
  };
  const clickHandler = () => {
    setItemToDelete(checkOutForm.id);
  };

  useEffect(() => {
    setTotal(checkOutForm.price * checkOutForm.number);
  }, []);

  return (
    <tr className="CheckOutCard">
      <td className="image">
        <img src={checkOutForm.image} />
      </td>
      <td>{checkOutForm.title}</td>
      <td className="total">
        <input
          onChange={changeHandler}
          defaultValue={checkOutForm.number}
          type="number"
          step="1"
          min="1"
        />
        <button onClick={clickHandler}>Remove</button>
      </td>
      <td className="amount">{total}</td>
    </tr>
  );
};

export default CheckOutCard;
