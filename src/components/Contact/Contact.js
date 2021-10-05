import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="banner" style={{ height: "50vh" }}>
        <img src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" />
      </div>
      <div className="contact">
        <div>
          <img
            src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="info">
            <i class="fas fa-map-marker-alt">Karaj</i>
            <i class="fas fa-phone-alt">+98 9357795479</i>
            <i class="fas fa-envelope">gh.shahrzad@gmail.com</i>
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
            <input type="button" value="SEND"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
