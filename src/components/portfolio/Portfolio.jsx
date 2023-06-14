import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/MegaSuper.jpg";
import IMG2 from "../../assets/lisbonforall.jpg";
import IMG3 from "../../assets/tocheck.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mega Super-Duper Space Game",
    github: "https://github.com/marianamedeirosfranco/Project1_January23",
    demo: "https://marianamedeirosfranco.github.io/Project1_January23/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lisbon For All",
    github: "https://github.com/marianamedeirosfranco/NotYet",
    demo: "https://lisbonforall.cyclic.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ToCheck",
    github: "https://github.com/marianamedeirosfranco/project3-client",
    demo: "https://tocheck.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="portfolioBtn" target="_blank">
                  Code
                </a>
                <a href={demo} className="portfolioBtn" target="_blank">
                  DEMO
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
