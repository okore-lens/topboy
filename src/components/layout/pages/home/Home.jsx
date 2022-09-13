import logo from "../../../../assets/images/logo2.png";

import Contact from "../contact/Contact";
import BrandsHome from "./components/BrandsHome";
import NationHome from "./components/NationHome";
import img from "../../../../assets/images/about-img.png";

import { Timeline } from "react-twitter-widgets";

import "./Home.scss";

function Home() {
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
          <img src={img} />
        </div>
        <div className="twitter">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "_okorelens",
            }}
            options={
              {
                // theme: "dark",
              }
            }
            renderError={(_err) => <p>Could not load timeline</p>}
          />
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
