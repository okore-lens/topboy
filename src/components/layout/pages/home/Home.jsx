import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePay,
  faCcMastercard,
  faApplePay,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
//image
// cards
import NationCard from "../../../cards/nationCard/NationCard";
// arrays
import nationList from "../../../../assets/arrays/nationArray";
// import serviceArray from "../../../../assets/arrays/serviceArray";

import "./Home.scss";
import Contact from "../contact/Contact";
import ServiceHome from "./components/ServiceHome";
import AboutHome from "./components/AboutHome";

function Home() {
  const [active, setActive] = useState(true);

  const interval = () => setInterval(() => setActive(!active), 20000);

  useEffect(() => {
    interval();
  });

  return (
    <div className="Home">
      <div className="hero">
        <div className="wrapper">
          <div className="text">
            <div>WE BRING THE PARTY </div>
            <div>TO YOU</div>
          </div>
        </div>
      </div>
      <div className="brands">
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faGooglePay}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcVisa}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faApplePay}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcPaypal}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcMastercard}
        />
      </div>
      <div className="nation">
        {nationList.map((nation) => (
          <div key={nation.id} className="nation-item">
            <NationCard name={nation.name} imgSrc={nation.imgSrc} />
          </div>
        ))}
      </div>
      <h2>WHO ARE WE ?</h2>
      <AboutHome />
      <div className="help">
        <div className="services">
          <div className="cover">
            <span className="text">HOW CAN WE HELP ?</span>
            <div className="services-row">
              <ServiceHome />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
