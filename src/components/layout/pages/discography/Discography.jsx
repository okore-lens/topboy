import React from "react";
import AudioCard from "../../../cards/audioCard/AudioCard";
import VideoCard from "../../../cards/videoCard/VideoCard";

import "./Discography.scss";

function Discography() {
  return (
    <div className="Discography">
      <h2>DISCOGRAPHY</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna ali.orem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna ali.orem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna ali et, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna ali incididunt ut
        labore et dolore magna ali. orem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna ali.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna ali et, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna ali
      </p>
      <div className="audio">
        <h3>AUDIO MIXES</h3>
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
      </div>
      <div className="video">
        <h3>VIDEO MIXES</h3>
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default Discography;
