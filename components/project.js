import React from "react";
import Link from "next/link";
import Button from "./button";
import projectStyles from "../styles/project.module.css";
import buttonStyles from "../styles/button.module.css";

const Project = ({ project }) => {
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
        {project.isFeatured && (
          <h4 className={projectStyles.feature}>Featured Project</h4>
        )}
        <h2 className={projectStyles.title}>{project.title}</h2>
        <p className={projectStyles.description}>{project.description}</p>
        <div className={projectStyles.buttons}>
          <Link href={project.link}>
            <a className={projectStyles.link}>
              <Button buttonStyle={buttonStyles.primary}>View Project</Button>
            </a>
          </Link>
          <Link href={project.github}>
            <a className={projectStyles.link}>
              <Button buttonStyle={buttonStyles.secondary}>Live Website</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
