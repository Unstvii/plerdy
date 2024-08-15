import React, { useState } from "react";
import "./SignForm.css";
import form from "../../images/form-image.png";
import logo from "../../images/logo-icon.svg";

export const SignForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, phone, agreed });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay">
      <div className="form-image">
        <img src={form} alt="formimage" />
      </div>
      <div className="form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h1>How to do a Website Audit to Improve SEO & Conversions</h1>
        <p>You will get an SMS with a link to the webinar</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="+380 - xx xxx xxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className="button-group">
            <button type="submit" id="support">
              Support
            </button>
            <button type="button" id="contact-sales">
              Contact sales
            </button>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="agree">
              By sending up2 you agree to our <a href="#"> Conditions</a> and{" "}
              <a href="#"> Privacy Policy</a>
            </label>
          </div>
          <div className="powered-by">
            <img src={logo} alt="logo" /> Powered by <a href="#"> Plerdy</a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
