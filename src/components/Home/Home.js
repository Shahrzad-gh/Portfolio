import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="header" id="home">
      <div className="banner">
        <img
          src="https://image.freepik.com/free-photo/data-technology-blue-background-with-hacker-remixed-media_53876-108534.jpg"
          alt="headerPic"
        />
        <div className="welcome">
          <p>
            Hi, my name is Shahrzad and I'm a Web Developer
            <br />
            Let's make .....
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
