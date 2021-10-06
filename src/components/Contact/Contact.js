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
        <div>
          <img
            style={{ width: 400, border: "1px solid gray" }}
            src="https://image.freepik.com/free-photo/magnifying-glass-map-close-up_155003-3909.jpg"
            alt="location"
          />
        </div>
        <div>
          <div className="info">
            <i className="fas fa-map-marker-alt">Location</i>
            <i className="fas fa-phone-alt">Phone</i>
            <i className="fas fa-envelope">Email</i>
          </div>
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
