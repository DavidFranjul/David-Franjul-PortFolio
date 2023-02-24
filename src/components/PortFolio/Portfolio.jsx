import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency dashboard",
    github: "https://github.com",
    demo: "dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates",
    github: "https://github.com",
    demo: "dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard",
    github: "https://github.com",
    demo: "dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Mantaining tasks",
    github: "https://github.com",
    demo: "dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates and infographics",
    github: "https://github.com",
    demo: "dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency dashboard",
    github: "https://github.com",
    demo: "dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={image}
                  alt={title}
                  className="portfolio__item-image1"
                />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary btn-background">
                  Github
                </a>
                <a
                  href={demo}
                  rel="noreferrer"
                  className="btn "
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
