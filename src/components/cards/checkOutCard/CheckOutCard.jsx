import React, { useState } from "react";
import { useEffect } from "react";

import "./CheckOutCard.scss";

const CheckOutCard = ({ checkOutForm, setItemToDelete }) => {
  const [total, setTotal] = useState(0);
  const [selectColor, setSelectColor] = useState("Color");
  const [selectSize, setSelectSize] = useState("Size");

  const changeHandler = (ev) => {
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
    console.log(selectSize, selectColor);
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
        <button onClick={clickHandler}>Remove</button>
      </td>
      <td className="amount">{total}</td>
    </tr>
  );
};

export default CheckOutCard;
