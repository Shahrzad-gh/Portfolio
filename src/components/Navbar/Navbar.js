import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
    isOpen ? openMobileMenu() : closeMobileMenu();
  };

  const openMobileMenu = () => {
    document.querySelector(".icon").innerHTML = "<i class='fas fa-times'></i>";
    document.querySelector(".nav").style.display = "block";
  };
  const closeMobileMenu = () => {
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".icon").innerHTML = "<i class='fa fa-bars'></i>";
  };

  return (
    <div className={navbar ? "navbar-active" : "navbar"}>
      <a href={void 0} className="icon" onClick={handleMobileMenu}>
        <i className="fa fa-bars"></i>
      </a>
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
