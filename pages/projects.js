import Head from "next/head";
import Layout from "../components/layout";
import Project from "../components/project";
import utilStyles from "../styles/utils.module.css";
import projectData from "../lib/projects";

const projects = () => {
  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Projects</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Projects</h1>
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default projects;
