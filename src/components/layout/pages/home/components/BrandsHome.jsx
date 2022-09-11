import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePay,
  faCcMastercard,
  faApplePay,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

const BrandsHome = () => {
  const [active, setActive] = useState(true);

  const interval = () => setInterval(() => setActive(!active), 20000);

  useEffect(() => {
    interval();
  });

  return (
    <div className="brands">
      <div className="gallery">
        <div className="carousel">
          <figure>
            <a>
              <FontAwesomeIcon
                className={`icon   ${active ? "active" : ""}`}
                icon={faGooglePay}
              />
            </a>
          </figure>
          <figure>
            <a>
              <FontAwesomeIcon
                className={`icon   ${active ? "active" : ""}`}
                icon={faCcVisa}
              />
            </a>
          </figure>
          <figure>
            <a>
              <FontAwesomeIcon
                className={`icon   ${active ? "active" : ""}`}
                icon={faApplePay}
              />
            </a>
          </figure>
          <figure>
            <a>
              <FontAwesomeIcon
                className={`icon   ${active ? "active" : ""}`}
                icon={faCcPaypal}
              />
            </a>
          </figure>
          <figure>
            <a>
              <FontAwesomeIcon
                className={`icon   ${active ? "active" : ""}`}
                icon={faCcMastercard}
              />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BrandsHome;
