import React, { useRef, useState } from "react";
import "./Contact.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const formId = "Ov1579Kb";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "x";
  const recaptchaRef = useRef;

  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      // "g-recaptcha-response": recaptchaToken,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setSubmitMessage({
        text: "Thanks, someone will be in touch shortly.",
      });
      // setFormState(initialFormState);
      // recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setSubmitMessage({
        class: "bg-red-500",
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };

  const updateFormControl = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

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
          <i className="fas fa-map-marker-alt">
            <span>Iran</span>
          </i>
          <i className="fas fa-phone-alt">
            <span>+98 935 1234567</span>
          </i>
          <i className="fas fa-envelope">
            <span>gh.shahrzad@gmail.com</span>
          </i>
        </div>
        <div>
          {submitMessage && (
            <div className="contact-res-mess">{submitMessage.text}</div>
          )}
          <form className="contact-form" onSubmit={submitForm}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={updateFormControl}
            ></input>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={updateFormControl}
            ></input>
            <textarea
              name="message"
              onChange={updateFormControl}
              type="textarea"
              rows="10"
              cols="50"
              na
              placeholder="Message"
            ></textarea>
            {/* <ReCAPTCHA
              // ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
            /> */}
            <input
              disabled={submitting}
              className="submit-btn"
              type="submit"
              value="SEND MESSAGE"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
