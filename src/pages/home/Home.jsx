import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGooglePay,
  faCcMastercard,
  faApplePay,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

import "./Home.scss";
import NationCard from "../../components/cards/nationCard/NationCard";

function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <div className="wrapper">
          <div className="text">
            <div className="sentence">WE BRING THE PARTY </div>
            <div className="sentence">TO YOU</div>
          </div>
        </div>
      </div>
      <div className="brands">
        <FontAwesomeIcon className="icon" icon={faGooglePay} />
        <FontAwesomeIcon className="icon" icon={faCcVisa} />
        <FontAwesomeIcon className="icon" icon={faApplePay} />
        <FontAwesomeIcon className="icon" icon={faCcPaypal} />
        <FontAwesomeIcon className="icon" icon={faCcMastercard} />
      </div>
      <div className="nation">
        <NationCard />
        <NationCard />
        <NationCard />
        <NationCard />
      </div>
      <div className="about">
        <h2>WHO ARE WE ?</h2>
        <div className="twitter">Hello</div>
        <div className="info"></div>
      </div>
      <div className="help">How can we Help</div>
      <div className="contact">Contact Form</div>
    </div>
  );
}

export default Home;
