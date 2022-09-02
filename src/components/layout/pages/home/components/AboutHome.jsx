import React from "react";
import { Timeline } from "react-twitter-widgets";
import aboutImg from "../../../../../assets/images/about-img.png";

const AboutHome = () => {
  return (
    <div className="about">
      <div className="twitter">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "_okorelens",
          }}
          options={{
            height: "550",
            // theme: "da",
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
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna ali.orem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna ali. orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            ali.orem ipsum dolor sit ipsum dolor sit amet, consectetur
            adipiscing elit, sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali et,
            consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.ncididunt ut labore et dolore
            magna ali et, consectetur.
          </p>
        </div>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default AboutHome;
