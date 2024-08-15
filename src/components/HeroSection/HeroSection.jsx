import React, { useEffect } from "react";
import "./HeroSection.css";
import hero from "../../images/hero.png";
import { ReactComponent as Subaru } from "../../images/subaru.svg";
import { ReactComponent as Prom } from "../../images/prom.svg";
import { ReactComponent as SoftServe } from "../../images/soft-serve.svg";
import { ReactComponent as UkrPoshta } from "../../images/ukr-poshta.svg";
import { ReactComponent as Anextour } from "../../images/anextour.svg";
import graphOne from "../../images/graph-one.png";
import graphTwo from "../../images/graph-two.png";
import graphThree from "../../images/graph-three.png";

export function HeroSection({ openForm }) {
  useEffect(() => {
    const images = document.querySelectorAll(".hero-image-graph img");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
      }, index * 500); // затримка перед появою кожного зображення
    });
  }, []);
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-content-wrapper">
          <div className="hero-content-left">
            <h1>How to do a Website Audit to Improve SEO & Conversions</h1>
            <p>
              Usability auditing with the Plerdy tool is a comprehensive expert
              assessment of your website based on a profound study of user
              behavior registered on it. Plerdy will provide you with crucial
              data based on which you will be able to run an efficient usability
              audit of your website, identify and fix SEO issues, and
              subsequently lead it to higher positions in search.
            </p>
            <p>
              Thus, you'll compile a list of flaws in your website interface,
              navigation, and conversion path that can eventually affect its
              micro and macro conversion rates.
            </p>
            <button className="hero-button" onClick={openForm}>
              Run the Plerdy tool
            </button>
            <div className="hero-trusted-by">
              <div>
                <p>Trusted by some of the world's largest enterprises</p>
                <div className="hero-trusted-logos">
                  <SoftServe />
                  <Subaru />
                  <Anextour />
                  <Prom />
                  <UkrPoshta />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content-right">
            <div className="hero-image">
              <img src={hero} alt="hero-image" />
              <div className="hero-image-graph">
                <img src={graphOne} alt="graph" />
                <img src={graphTwo} alt="graph" />
                <img src={graphThree} alt="graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
