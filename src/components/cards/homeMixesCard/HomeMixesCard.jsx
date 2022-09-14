import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "./HomeMixesCard.scss";

const HomeMixesCard = () => {
  return (
    <div className="HomeMixesCard">
      <div className="wrapper">
        <FontAwesomeIcon className="icon" icon={faPlay} />
      </div>
    </div>
  );
};

export default HomeMixesCard;
