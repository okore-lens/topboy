import React, { useEffect, useState } from "react";
import {
  faDownload,
  faMusic,
  faPause,
  faPlay,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AudioCard.scss";

const AudioCard = (props) => {
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, [audio]);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(props.url);
  return (
    <div className="AudioCard">
      <div className="text">
        <FontAwesomeIcon icon={faMusic} className="icon" />
        <p>{props.title}</p>
      </div>
      <div className="icons">
        <FontAwesomeIcon
          icon={playing ? faPause : faPlay}
          onClick={toggle}
          className="icon"
        />
        <a href={props.link}>
          <FontAwesomeIcon className="icon" icon={faShareAlt} />
        </a>
        <a href={props.url} download={props.title}>
          <button>
            <FontAwesomeIcon icon={faDownload} className="icon" />
            DOWNLOAD
          </button>
        </a>
      </div>
    </div>
  );
};

export default AudioCard;
