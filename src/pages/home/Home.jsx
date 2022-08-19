import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePay,
  faCcMastercard,
  faApplePay,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import NationCard from "../../components/cards/nationCard/NationCard";
import { Timeline } from "react-twitter-widgets";
import aboutImg from "../../assets/images/about-img.png";
import { send } from "emailjs-com";
import ServiceCard from "../../components/cards/serviceCard/ServiceCard";

import { useEffect, useState } from "react";
import nationList from "../../assets/arrays/nationArray";
import serviceArray from "../../assets/arrays/serviceArray";

import "./Home.scss";

function Home() {
  const [active, setActive] = useState(true);
  const [formInputs, setFormInputs] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const ChangeHandler = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  const formHandler = (event) => {
    event.preventDefault();
    send("service_yyeki9b", "template_ioz6ifx", formInputs, "yySSC3OYij-nR0TpB")
      .then((response) => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert("Message not sent");
      });
    setFormInputs({ from_name: "", message: "", reply_to: "" });
  };

  const interval = () => setInterval(() => setActive(!active), 20000);

  useEffect(() => {
    interval();
  });

  return (
    <div className="Home">
      <div className="hero">
        <div className="wrapper">
          <div className="text">
            <div>WE BRING THE PARTY </div>
            <div>TO YOU</div>
          </div>
        </div>
      </div>
      <div className="brands">
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faGooglePay}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcVisa}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faApplePay}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcPaypal}
        />
        <FontAwesomeIcon
          className={`icon   ${active ? "active" : ""}`}
          icon={faCcMastercard}
        />
      </div>
      <div className="nation">
        {nationList.map((nation) => (
          <div key={nation.id} className="nation-item">
            <NationCard name={nation.name} imgSrc={nation.imgSrc} />
          </div>
        ))}
      </div>
      <h2>WHO ARE WE ?</h2>
      <div className="about">
        <div className="twitter">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "_okorelens",
            }}
            options={{
              height: "550",
              theme: "dark",
            }}
            renderError={(_err) => <p>Could not load timeline</p>}
          />
        </div>
        <div className="info">
          <div className="img">
            <img src={aboutImg} />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali.orem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali. orem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali.orem ipsum dolor sit
              ipsum dolor sit amet, consectetur adipiscing elit, sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna ali et, consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali.orem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali. orem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna ali.orem ipsum dolor sit
              ipsum dolor sit amet, consectetur adipiscing elit, sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna ali et, consectetur.
            </p>
          </div>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="help">
        <div className="services">
          <div className="cover">
            <span className="text">HOW CAN WE HELP ?</span>
            <div className="services-row">
              <div className="wrapper">
                {serviceArray.map((service) => (
                  <Link
                    key={service.id}
                    to={{ pathname: "/services", hash: `${service.id}` }}
                  >
                    <ServiceCard
                      name={service.title}
                      className="service-card"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="wrapper">
          <div className="form-bg">
            <form>
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={formInputs.from_name}
                  onChange={ChangeHandler}
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="reply_to"
                  value={formInputs.reply_to}
                  onChange={ChangeHandler}
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  value={formInputs.message}
                  onChange={ChangeHandler}
                  placeholder="Message"
                />
              </div>
              <div>
                <button onClick={formHandler}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
