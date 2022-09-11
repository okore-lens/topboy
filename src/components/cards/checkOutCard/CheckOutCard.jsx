import React, { useState } from "react";
import { useEffect } from "react";

import "./CheckOutCard.scss";

const CheckOutCard = ({ checkOutForm, setItemToDelete, approvedItems }) => {
  const [total, setTotal] = useState(0);
  const [selectColor, setSelectColor] = useState("Yellow");
  const [selectSize, setSelectSize] = useState("small");
  const [number, setNumber] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [text, setText] = useState("COnfirm");

  const changeHandler = (ev) => {
    setNumber(ev.target.value);
    let totalPrice = ev.target.value * checkOutForm.price;
    setTotal(totalPrice);
  };
  const sizeHandler = (ev) => {
    setSelectSize(ev.target.value);
  };
  const colorHandler = (ev) => {
    setSelectColor(ev.target.value);
  };
  const clickHandler = () => {
    setItemToDelete(checkOutForm.id);
  };

  const confirmHandler = (ev) => {
    setConfirmed(!confirmed);
    approvedItems({
      number: number,
      color: selectColor,
      size: selectSize,
      title: checkOutForm.title,
      id: checkOutForm.id,
    });
  };

  useEffect(() => {
    setTotal(checkOutForm.price * checkOutForm.number);
  }, []);

  return (
    <tr className={`CheckOutCard  ${confirmed && "confirm"} `}>
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
        <select value={selectColor} onChange={colorHandler}>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="variety">Variety</option>
        </select>
        <select value={selectSize} onChange={sizeHandler}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xtra-large">Xtra Large</option>
          <option value="variety">Variety</option>
        </select>
        <button onClick={clickHandler} className="remove">
          Remove
        </button>
        <button onClick={confirmHandler}>
          {confirmed ? "Unconfirm" : "Confirm"}
        </button>
      </td>
      <td className="amount">{total}</td>
    </tr>
  );
};

export default CheckOutCard;
