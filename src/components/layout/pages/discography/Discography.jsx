import React, { useEffect, useState } from "react";
import audiolist from "../../../../assets/arrays/audio";
import AudioCard from "../../../cards/audioCard/AudioCard";
import VideoCard from "../../../cards/videoCard/VideoCard";

import "./Discography.scss";

function Discography() {
  const [videos, setVideos] = useState([]);
  // fetch videos
  const fetchVideos = async () => {
    const response = await fetch(
      "https://topboy-nation-default-rtdb.europe-west1.firebasedatabase.app/Videos.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const responseData = await response.json();

    const loadedVideos = [];

    for (const key in responseData) {
      loadedVideos.push({
        id: key,
        src: responseData[key].src,
      });
    }

    loadedVideos.map((vid) => {
      let str = vid.src;
      let after = str.replace(/"/g, "");
      vid.src = after;
      console.log(vid.src);
    });

    setVideos(loadedVideos);
  };

  useEffect(() => {
    fetchVideos().catch((error) => alert(error.message));
  }, []);

  return (
    <div className="Discography-wrapper">
      <div className="Discography">
        <h2>DISCOGRAPHY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna ali.orem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna ali. orem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna ali.orem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna ali et, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna ali incididunt ut labore et
          dolore magna ali. orem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          ali.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna ali et,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna ali
        </p>

        <div className="audio">
          <h3>AUDIO MIXES</h3>
          {audiolist.map((audio) => (
            <AudioCard
              key={audio.id}
              url={audio.url}
              title={audio.title}
              link={audio.link}
            />
          ))}
        </div>
        <div className="video">
          <h3>VIDEO MIXES</h3>
          {videos.map((video) => (
            <VideoCard key={video.id} src={video.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discography;
