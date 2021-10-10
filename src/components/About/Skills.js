import React from "react";
import "./About.css";

function Skills() {
  return (
    <div id="skills">
      <p className="center">I'm good at</p>
      <div className="skills">
        <div className="skill-col">
          <p>HTML/CSS</p>
          <div className="container">
            <div className="col" style={{ width: "90%" }}>
              90%
            </div>
          </div>
          <p>JavaScript</p>
          <div className="container">
            <div className="col" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </div>
        <div className="skill-col">
          <p>ReactJS</p>
          <div className="container">
            <div className="col" style={{ width: "80%" }}>
              80%
            </div>
          </div>
          <p>Material-ui</p>
          <div className="container">
            <div className="col" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </div>
      </div>
      <div className="familar-with">
        <p className="center">Familar with</p>
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Socket.io</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
