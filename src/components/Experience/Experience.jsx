import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return <section id="experience">
    <h5>Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Web-Development</h3>

        <div className="experience__backend experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>CSS</h4>
              <small className="text-light">Intermediate</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Javascript</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>React</h4>
              <small className="text-light">Intermediate</small></div>
          </article>
        </div>
      </div>

      <div className="experience__frontend ">
        <h3>Post-Production</h3>

        <div className="experience__backend experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Adobe Premiere Pro</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Adobe Photoshop</h4>
              <small className="text-light">Intermediate</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Adobe After Effects</h4>
              <small className="text-light">Intermediate</small></div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div><h4>Adobe illustrator</h4>
              <small className="text-light">Intermediate</small></div>
          </article>

        </div>
      </div>


    </div>

  </section>
};

export default Experience;
