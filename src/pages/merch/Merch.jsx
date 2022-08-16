import React from "react";
import merchList from "../../assets/arrays/merchArray";
import MerchCard from "../../components/cards/merchCard/MerchCard";

import "./Merch.scss";

function Merch() {
  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
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
