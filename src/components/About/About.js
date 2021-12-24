import React, { useEffect, useState } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about" id="about">
      <h3 className="center">About Me</h3>
      <p className="center">I love developing</p>
      <p className="aboutme">
        I have diverse skills ranging from design to <b>HTML</b>, <b>CSS</b>,{" "}
        <b>JavaScript</b>, and <b>Reactjs</b>. I am an enthusiastic learner and
        motivated who can learn and work with new technologies.
      </p>
      <div className="about-more">
        <div data-aos="fade-right" className="profile-pic">
          <p>Shahrzad Ghahvehrokhi</p>
          <img
            src="https://image.freepik.com/free-photo/keyword-seo-content-website-tags-search_53876-120179.jpg"
            alt="My Profile Pic"
            title="Shahrzad Ghahvehrokhi"
          />
        </div>
        <div data-aos="fade-left" className="profile-content">
          <p>
            🔭 I’m currently working on
            <a className="link" href="https://github.com/Shahrzad-gh/Portfolio">
              ⚡Portfolio
            </a>{" "}
            <br />
            🌱 I’m currently learning Flutter <br />
            👯 I’m looking to collaborate on React projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
