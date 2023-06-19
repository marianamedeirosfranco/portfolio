import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h1>More about me...</h1>

      <div className="container about__container">
        <div className="about__content">
          I'm Mariana, a Full-stack Developer with a passion for coding that
          began during my studies in Naval Engineering and Architecture. My
          first exposure to C++ sparked my curiosity and ignited my love for
          coding. With a background in Event Planning, Airport Operations, and
          Sales in the hospitality industry, I have honed my skills in planning,
          stress management, and prioritization. These roles have developed my
          exceptional organizational abilities and customer-centric mindset. As
          an empathic individual, I understand the importance of meeting the
          unique requirements of customers and stakeholders. This skill has
          allowed me to successfully execute events, manage operations, and
          build strong client relationships. I believe in taking a holistic
          approach that considers both the technical and human aspects of a
          project to achieve outstanding results. I'm excited to leverage my
          technical expertise, organizational prowess, and empathic nature to
          create meaningful solutions. Let's embark on this journey together!
        </div>
        <a href="#contact" className="letsTalk-btn">
          Let's Talk
        </a>
      </div>
    </section>
  );
}

export default About;
