import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import meSMALL from "../../assets/me-small.png";
import Headersocials from "./Headersocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header-top">
          <h5>Hello I'm</h5>
          <h1>David Franjul</h1>
          <h5 className="text-light">TEST TEST TEST</h5>
          <CTA />
          <Headersocials />
        </div>
        <div className="image-and-div">
          <div className="me">
            <div>
              <img src={meSMALL} alt="me" className="image-me" />
            </div>
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
