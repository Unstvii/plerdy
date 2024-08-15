import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../images/Logo.svg";

export const Header = ({ openForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixi">
      <header className="header">
        <div className="header-wrapper">
          <div className="logo">
            <Logo className="desktop-logo" />
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#text1">Pricing</a>
              </li>
              <li>
                <a href="#text2">Use Cases</a>
              </li>
              <li>
                <a href="#text3">Book a Demo</a>
              </li>
            </ul>
          </nav>

          <div className="buttons">
            <button className="sign-in">Sing In</button>
            <button className="contact" onClick={openForm}>
              Contact sales
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
