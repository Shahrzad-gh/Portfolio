import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="banner" style={{ height: "50vh" }}>
        <img src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" />
      </div>
      <div style={{ padding: "20px" }}>
        <p className="center">My Works</p>
        <div className="projects">
          <div className="pro-content">
            <div>Title</div>
            <div>
              <img src="https://image.freepik.com/free-photo/laptop_23-2148155456.jpg" />
            </div>
            <div>content</div>
          </div>
          <div className="pro-content">
            <div className="pro-content">
              <div>Title</div>
              <div>
                <img src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" />
              </div>
              <div>content</div>
            </div>
          </div>
          <div className="pro-content">
            <div className="pro-content">
              <div>Title</div>
              <div>
                <img src="https://image.freepik.com/free-photo/http-www-website-links-search-box-graphic-concept_53876-125066.jpg" />
              </div>
              <div>content</div>
            </div>
          </div>
          <div className="pro-content">
            <div className="pro-content">
              <div>Title</div>
              <div>
                <img src="https://image.freepik.com/free-photo/elderly-man-is-using-mobile-phone_53876-30130.jpg" />
              </div>
              <div>content</div>
            </div>
          </div>
          <div className="pro-content">
            <div className="pro-content">
              <div>Title</div>
              <div>
                <img src="https://image.freepik.com/free-photo/keyword-seo-content-website-tags-search_53876-120179.jpg" />
              </div>
              <div>content</div>
            </div>
          </div>
          <div className="pro-content">
            <div className="pro-content">
              <div>Title</div>
              <div>
                <img src="https://image.freepik.com/free-photo/coding-man_1098-18084.jpg" />
              </div>
              <div>content</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
