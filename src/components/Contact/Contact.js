import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="banner" style={{ height: "50vh" }} id="contact">
        <img
          alt="banner"
          src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
        />
        <div className="contact-text">CONTACT</div>
      </div>
      <div className="contact">
        <div className="center">
          <img
            className="location-pic"
            src="https://image.freepik.com/free-photo/magnifying-glass-map-close-up_155003-3909.jpg"
            alt="location"
          />
        </div>
        <div className="info">
          <i className="fas fa-map-marker-alt">Iran</i>
          <i className="fas fa-phone-alt">+98 935 1234567</i>
          <i className="fas fa-envelope">gh.shahrzad@gmail.com</i>
        </div>
        <div>
          <form className="contact-form">
            <input type="email" placeholder="Email"></input>
            <input type="text" placeholder="Name"></input>
            <textarea
              type="textarea"
              rows="10"
              cols="50"
              placeholder="Message"
            ></textarea>
            <input type="button" value="SEND MESSAGE"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
