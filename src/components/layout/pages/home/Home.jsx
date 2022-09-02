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
import logo from "../../../../assets/images/logo2.png";

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
        <div className="hero-img">
          <img src={logo} />
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
      </div>
      <h2>TopBoy Members</h2>
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
