import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import merchList from "../../../../assets/arrays/merchArray";
import MerchCard from "../../../cards/merchCard/MerchCard";

import "./Merch.scss";

function Merch() {
  const [active, setActive] = useState(false);
  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
        <div className="cart">
          <FontAwesomeIcon
            className={`icon   ${active ? "active" : ""}`}
            icon={faCartArrowDown}
          />
        </div>
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
