import React from "react";
import "./BoostSection.css";
const BoostSection = ({ openForm }) => {
  return (
    <div className="BoostSection">
      <button onClick={openForm}>Boost my website conversion</button>
      <p>
        So, it’s high time for you to stop losing 99% of potential clients due
        to being unaware of your website users’ behavior patterns and needs.
      </p>
    </div>
  );
};

export default BoostSection;
