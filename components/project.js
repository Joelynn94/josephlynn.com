import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import projectStyles from "../styles/project.module.css";
import buttonStyles from "../styles/button.module.css";

const Project = ({ project }) => {
  return (
    <div className={projectStyles.container}>
      <div className={projectStyles["img-wrapper"]}>
        <Image
          src={project.image}
          alt="Headshot of Joseph Lynn"
          className={projectStyles.img}
          width={1365}
          height={920}
        />
      </div>
      <div className={`${projectStyles.info} ${projectStyles.secondary}`}>
        {project.isFeatured && (
          <h4 className={projectStyles.feature}>Featured Project</h4>
        )}
        <h2 className={projectStyles.title}>{project.title}</h2>
        <p className={projectStyles.description}>{project.description}</p>
        <div className={projectStyles.buttons}>
          <Button buttonStyle={buttonStyles.primary} href={project.link}>
            View Project
          </Button>
          <Button buttonStyle={buttonStyles.secondary} href={project.github}>
            Live Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
