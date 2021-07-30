import Head from "next/head";
import Layout from "../components/Layout";
import Project from "../components/project";
import projectData from "../lib/projects";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/project.module.css";

const projects = () => {
  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Projects</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Projects</h1>
        <div className={projectStyles["grid-project"]}>
          {projectData &&
            projectData.map((project) => (
              <Project key={project.id} project={project} />
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default projects;
