import React from "react";
import "./about.css";
import ME1 from "../../assets/me-about1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me image__container">
          <div className="about__me-image ">
            <img className="about-section-image" src={ME1} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repudiandae iure et vitae illo quo saepe non dolores ad quidem
            officia veritatis voluptates repellat temporibus autem eligendi
            dolor, totam consequuntur?
          </p>

          <a href="#contact" className="btn btn-primary btn-background">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
