import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import merchList from "../../../../assets/arrays/merchArray";
import CheckOutCard from "../../../cards/checkOutCard/CheckOutCard";
import MerchCard from "../../../cards/merchCard/MerchCard";
import CartIcon from "../../../Cart/CartIcon";

import "./Merch.scss";

function Merch() {
  const [amount, setAmount] = useState(0);
  const [item, setItem] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [add, setAdd] = useState(false);
  const [status, setStatus] = useState("");
  const [checkOutForm, setCheckOutForm] = useState({
    number: 0,
    price: 0,
    title: "",
    image: null,
    id: 0,
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const clickHandler = () => {
    // console.log("clicked");
    setClicked(true);
    // console.log(item);
  };
  const modalHandler = () => {
    setClicked(false);
  };

  let totalAmount;

  const totalAmountHandler = (number, price, title) => {
    // console.log(number, price);
    totalAmount = number * price;
    setAmount(totalAmount + amount);
    setStatus(`${number}  ${title}(s) have been added to the cart `);
    setTimeout(function () {
      setAdd(false);
    }, 3000);
  };

  const checkOutHandler = (number, price, title, image, id) => {
    setCheckOutForm({
      number,
      price,
      title,
      image,
      id,
    });
  };

  const removeItemHandler = () => {
    console.log(itemToDelete);
  };

  const proceedHandler = () => {
    setProceed(true);
  };

  useEffect(() => {
    removeItemHandler();
  }, [itemToDelete]);

  useEffect(() => {
    setSelectedItems([...selectedItems, checkOutForm]);
  }, [checkOutForm]);

  // console.log(prev, item);

  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
        <button onClick={clickHandler} className="cart">
          <span className="icon">
            <CartIcon />
          </span>
          <span>Cart</span>
          <span className="badge">{amount}</span>
        </button>
        <div className="content">
          {add && <div className="status">{status}</div>}
          <div className="merch-row">
            <div className="wrapper">
              {merchList.map((merch) => (
                <MerchCard
                  key={merch.id}
                  item={setItem}
                  totalAmount={totalAmountHandler}
                  clicked={setAdd}
                  checkOut={checkOutHandler}
                  id={merch.id}
                  title={merch.title}
                  imgSrc={merch.imgSrc}
                  price={merch.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {clicked && (
        <div>
          <div onClick={modalHandler} className="check-out">
            Form Goes Here
          </div>
          <div className="form">
            <h2>Check Out Form</h2>
            <table>
              <thead>
                <tr className="table-heading">
                  <td>Image</td>
                  <td>Name</td>
                  <td>Amount</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => {
                  if (item.image === null) return;
                  return (
                    <CheckOutCard
                      setItemToDelete={setItemToDelete}
                      checkOutForm={item}
                    />
                  );
                })}
              </tbody>
            </table>
            <button onClick={proceedHandler}>Proceed To Order</button>
            {proceed && <div className="approval">Billing Details</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Merch;
