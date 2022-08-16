import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons";

import "./NationCard.scss";

function NationCard(props) {
  return (
    <div className="NationCard">
      <h3>{props.name}</h3>
      <div>
        <img src={props.imgSrc} alt="nation image" />
      </div>
      <div className="media-links">
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a href="https://twitter.com/deejayronnieXL" target="_blank">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/deejayronnie_xl/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://www.mixcloud.com/ronnie-griffins/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faMixcloud} />
        </a>
      </div>
    </div>
  );
}

export default NationCard;
