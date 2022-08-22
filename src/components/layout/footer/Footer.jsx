import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="bold">
        <span className="text-link">Terms and Conditions</span>
        <span className="text-link">Privacy Policy</span>
        <span className="text-link">Contact Us</span>
      </p>
      <hr />
      <p>© 2022 Topboy Nation || All Rights Reserved</p>
      <div className="media-links">
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a href="https://twitter.com/deejayronnieXL" target="_blank">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faYoutube} />
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
};

export default Footer;
