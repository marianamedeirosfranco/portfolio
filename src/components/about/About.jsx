import React from "react";
import "./about.css";
import ME from "../../assets/Foto Mariana.jpg";

function About() {
  return (
    <section id="about">
      <h1>More about me...</h1>

      <div className="container about__container">
{/*         <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="About-Img" />
          </div> 
        </div> */}
        <div className="about__content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <a href="#contact" className='letsTalk-btn'>Let's Talk</a>
      </div>
    </section>
  );
}

export default About;
