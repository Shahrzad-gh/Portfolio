import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <p>developed by Shahrzad</p>
      </div>
      <div>
        <ul>
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/in/shahrzad-ghahvehrokhi/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a className="link" href="https://github.com/Shahrzad-gh/">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://stackoverflow.com/users/5289320/sharzad-gh"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
