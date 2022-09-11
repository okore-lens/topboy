import logo from "../../../../assets/images/logo2.png";

import Contact from "../contact/Contact";
import ServiceHome from "./components/ServiceHome";
import AboutHome from "./components/AboutHome";
import BrandsHome from "./components/BrandsHome";
import NationHome from "./components/NationHome";

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
      <h2>WHO ARE WE ?</h2>
      <AboutHome />
      <ServiceHome />
      <Contact />
    </div>
  );
}

export default Home;
