import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/megaSuperDuperedited.jpg"
import IMG2 from "../../assets/lisbonForAlledited.jpg";
import IMG3 from "../../assets/tocheckedited.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mega Super-Duper Space Game",
    description:
      "Mega Super-Duper Space Game: A nostalgic 80s-inspired adventure where players dodge debris. Test your reflexes and face off against a challenging boss for ultimate thrills. Experience the excitement of retro gaming with a modern twist.",
    github: "https://github.com/marianamedeirosfranco/Project1_January23",
    demo: "https://marianamedeirosfranco.github.io/Project1_January23/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lisbon For All",
    description:
      "Discover Lisbon with ease! Our user-friendly platform helps people with disabilities find accessible and enjoyable places to visit. Experience modern design and increased awareness of accessibility as you explore the city.",
    github: "https://github.com/marianamedeirosfranco/NotYet",
    demo: "https://lisbonforall.cyclic.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ToCheck",
    description:
      "TOCHECK is a versatile platform that empowers you to effortlessly add events, leave comments, and conveniently manage your schedule. Stay organized and connected with its user-friendly interface, making event planning a breeze. ",
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
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
