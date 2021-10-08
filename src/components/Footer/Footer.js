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
          <li href="#">
            <i className="fab fa-linkedin"></i>
          </li>
          <li href="#">
            <i className="fab fa-github"></i>
          </li>
          <li href="#">
            <i className="fab fa-stack-overflow"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
