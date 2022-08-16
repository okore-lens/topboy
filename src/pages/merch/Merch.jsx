import React from "react";
import MerchCard from "../../components/cards/merchCard/MerchCard";

import "./Merch.scss";

function Merch() {
  return (
    <div className="Merch">
      <h2>MERCHANDISE</h2>
      {/* <p>Scroll</p> */}
      <div className="content">
        <div className="merch-row">
          <div className="wrapper">
            <MerchCard />
            <MerchCard />
            <MerchCard />
            <MerchCard />
            <MerchCard />
            <MerchCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merch;
