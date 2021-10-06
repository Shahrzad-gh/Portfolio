import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <h3 className="center">About Me</h3>
      <p className="center">I love developing</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea nam
        neque nesciunt odio non minima, amet corporis obcaecati repellat
        voluptatum, laudantium quisquam quam? Tempore sint saepe aut quibusdam
        corrupti illo molestias totam eveniet dicta fugiat dolore excepturi
        voluptatum cum veniam, maiores quia consectetur magnam ipsa quas
        pariatur enim ratione!
      </p>
      <div className="about-more">
        <div className="profile-pic">
          <p>Shahrzad Ghahvehrokhi</p>
          <img
            src="https://image.freepik.com/free-photo/keyword-seo-content-website-tags-search_53876-120179.jpg"
            alt="My Profile Pic"
            title="Shahrzad Ghahvehrokhi"
          />
        </div>
        <div className="profile-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            eius ut sequi tempore non voluptas dolorem repudiandae maxime
            voluptate dolores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
