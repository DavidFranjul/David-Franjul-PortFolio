import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDribbbleSquare } from "react-icons/ai";

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com"
        className="header__socials-increase"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com"
        className="header__socials-increase"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://dribble.com"
        className="header__socials-increase"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineDribbbleSquare />{" "}
      </a>
    </div>
  );
};

export default Headersocials;
