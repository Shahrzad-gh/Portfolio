import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="banner" style={{ height: "50vh" }} id="projects">
        <img
          alt="proBanner"
          src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
        />
        <div className="work-text">PORTFOLIO</div>
      </div>
      <div id="project">
        <p className="center">My Works</p>
        <div className="projects">
          <div data-aos="flip-right" className="pro-content">
            <div className="title-style">Shin-dealer</div>
            <div>
              <img
                alt="pro1"
                src="https://image.freepik.com/free-photo/laptop_23-2148155456.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Shin-dealer"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="pro-content">
            <div className="title-style">H2H</div>
            <div>
              <img
                alt="pro2"
                src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Hand-To-Hand"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="pro-content">
            <div className="title-style">Blog-psychologist</div>
            <div>
              <img
                alt="pro3"
                src="https://image.freepik.com/free-photo/http-www-website-links-search-box-graphic-concept_53876-125066.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Blog-Psycology"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="pro-content">
            <div className="title-style">live-chat</div>
            <div>
              <img
                alt="pro4"
                src="https://image.freepik.com/free-photo/elderly-man-is-using-mobile-phone_53876-30130.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Livechat"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="pro-content">
            <div className="title-style">movie-hub</div>
            <div>
              <img
                alt="pro5"
                src="https://image.freepik.com/free-photo/keyword-seo-content-website-tags-search_53876-120179.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Movie-hub"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-up" className="pro-content">
            <div className="title-style">time-flutter</div>
            <div>
              <img
                alt="pro6"
                src="https://image.freepik.com/free-photo/coding-man_1098-18084.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>{" "}
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/Weather-Flutter"
                >
                  <i className="fab fa-github"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="pro-content">
            <div className="title-style">google-search</div>
            <div>
              <img
                alt="pro6"
                src="https://image.freepik.com/free-photo/coding-man_1098-18084.jpg"
              />
            </div>
            <div className="content-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, voluptatibus nisi cum eligendi repudiandae illo aliquid
              quas ducimus ipsam. Quia?
            </div>
            <div className="project-link">
              <div>
                <a className="link" href="#">
                  Demo
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://github.com/Shahrzad-gh/search-page"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
