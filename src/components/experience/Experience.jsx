import React from "react";
import "./experience.css";
import { TbBrandJavascript } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ImCloudCheck } from "react-icons/im";

function Experience() {
  return (
    <section id="experience">
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
             <ImHtmlFive2 className="experience__details-icon" />
                <h4>HTML</h4>
            </article>

            <article className="experience__details">

                <FaCss3Alt className="experience__details-icon" />
                <h4>CSS</h4>

            </article>

            <article className="experience__details">

                <TbBrandJavascript className="experience__details-icon" />
                <h4>Javascript</h4>

            </article>

            <article className="experience__details">

                <GrReactjs className="experience__details-icon" />
                <h4>React</h4>

            </article>

            <article className="experience__details">

                <FaBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>

            </article>

            <article className="experience__details">

                <SiTailwindcss className="experience__details-icon" />
                <h4>Tailwind</h4>

            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <ImCloudCheck className="experience__details-icon" />
                <h4>ExpressJs</h4>
            </article>

            <article className="experience__details">
                <ImCloudCheck className="experience__details-icon" />
                <h4>NodeJs</h4>
                    </article>

            <article className="experience__details">

                <ImCloudCheck className="experience__details-icon" />
                <h4>Axios</h4>

            </article>

            <article className="experience__details">

                <ImCloudCheck className="experience__details-icon" />
                <h4>MongoDB</h4>

            </article>

            <article className="experience__details">

                <ImCloudCheck className="experience__details-icon" />
                <h4>Mongoose</h4>

            </article>

            <article className="experience__details">

                <ImCloudCheck className="experience__details-icon" />
                <h4>Cloudinary</h4>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
