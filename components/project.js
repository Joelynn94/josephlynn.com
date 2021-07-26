import React from "react";
import Link from "next/link";

import Button from "./button";
import projectStyles from "../styles/project.module.css";
import buttonStyles from "../styles/button.module.css";

const project = () => {
  return (
    <div className={projectStyles.container}>
      <div className={projectStyles["img-wrapper"]}>
        <img
          src="/images/profile.jpg"
          alt="Headshot of Joseph Lynn"
          className={projectStyles.img}
        />
      </div>
      <div className={`${projectStyles.info} ${projectStyles.secondary}`}>
        <h4 className={projectStyles.feature}>Featured Project</h4>
        <h2 className={projectStyles.title}>Manage</h2>
        <p className={projectStyles.description}>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <div className={projectStyles.buttons}>
          <Link href="/">
            <a className={projectStyles.link}>
              <Button buttonStyle={buttonStyles.primary}>View Project</Button>
            </a>
          </Link>
          <Link href="/">
            <a className={projectStyles.link}>
              <Button buttonStyle={buttonStyles.secondary}>Live Website</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default project;
