import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import merchList from "../../../../assets/arrays/merchArray";
import MerchCard from "../../../cards/merchCard/MerchCard";
import CartIcon from "../../../Cart/CartIcon";

import "./Merch.scss";

function Merch() {
  const [active, setActive] = useState(false);
  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
        <button className="cart">
          <span className="icon">
            <CartIcon />
          </span>
          <span>Merch</span>
          <span className="badge">9</span>
        </button>
        {/* <p>Scroll</p> */}
        <div className="content">
          <div className="merch-row">
            <div className="wrapper">
              {merchList.map((merch) => (
                <MerchCard
                  key={merch.id}
                  title={merch.title}
                  imgSrc={merch.imgSrc}
                  price={merch.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merch;
