import logo from "../../../../assets/images/logo2.png";

import Contact from "../contact/Contact";
import BrandsHome from "./components/BrandsHome";
import NationHome from "./components/NationHome";
import HomeMixesCard from "../../../cards/homeMixesCard/HomeMixesCard";
import img from "../../../../assets/images/about-img.png";
import img2 from "../../../../assets/images/hoody.png";
import img3 from "../../../../assets/images/nation.png";
import img4 from "../../../../assets/images/cap.png";
import img5 from "../../../../assets/images/sticker.png";
import img6 from "../../../../assets/images/t-shirt.png";
import img7 from "../../../../assets/images/topboy-logo.png";

import { Timeline } from "react-twitter-widgets";

import "./Home.scss";
import { useState } from "react";
import { useEffect } from "react";
import imagelist from "../../../../assets/arrays/memoryArray";

function Home() {
  const [poster, setPoster] = useState(0);
  const imgArray = [img, img2, img3, img4, img5, img6, img7];

  const interval = () => {
    let count = poster;
    setInterval(() => {
      if (count >= 0) {
        if (count > imgArray.length - 1) {
          setPoster(0);
          count = 1;

          return;
        }
        setPoster(count++);
      }
    }, 3000);
  };

  let counter = poster + 1;

  const mouseHandler = (index) => {
    console.log(index + 1);
    setPoster(index);
    counter = index + 1;
  };

  useEffect(() => {
    interval();
    console.log(imagelist);
  }, []);
  return (
    <div className="Home">
      <div className="hero">
        <div className="hero-nation">
          <NationHome />
        </div>
        <div className="hero-brands">
          <div className="hero-img">
            <img src={logo} />
          </div>
          <BrandsHome />
        </div>
      </div>
      <div className="upcoming">
        <div className="poster">
          <img src={imgArray[poster]} />
          <div className="bar">
            <span className="count">{counter}</span>
            {imgArray.map((item, index) => (
              <div
                onClick={mouseHandler.bind(null, index)}
                key={index}
                className={`barItems ${counter === index + 1 ? "active" : ""} `}
              ></div>
            ))}
          </div>
        </div>
        <div className="twitter">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "_okorelens",
            }}
            options={{
              theme: "dark",
            }}
            renderError={(_err) => <p>Could not load timeline</p>}
          />
        </div>
      </div>
      <h2>Recently Dropped Mixes</h2>
      <div className="mixes">
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
        <div className="slides">
          <HomeMixesCard />
        </div>
      </div>
      <div className="youtube">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mLYsMpKp1tY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
