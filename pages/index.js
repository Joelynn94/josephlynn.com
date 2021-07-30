import Head from "next/head";
import config from "../lib/config";
import projectData from "../lib/projects";
import { getLatestPosts } from "../lib/posts";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Post from "../components/Post";
import Project from "../components/Project";
import Badge from "../components/Badge";
import Form from "../components/Form";
import buttonStyles from "../styles/button.module.css";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/project.module.css";

export async function getStaticProps() {
  const lastestPosts = getLatestPosts();
  return {
    props: {
      lastestPosts,
    },
  };
}

const home = ({ lastestPosts }) => {
  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Home</title>
      </Head>
      <section className={utilStyles.section}>
        <Hero config={config} />
      </section>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>
          Latest Posts.
          <Button buttonStyle={buttonStyles.secondary} href="/blog">
            View All
          </Button>
        </h2>
        {lastestPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>
          Projects.
          <Button buttonStyle={buttonStyles.secondary} href="/projects">
            View All
          </Button>
        </h2>
        <div className={projectStyles["grid-project"]}>
          {projectData &&
            projectData.map((project) => {
              if (project.isFeatured) {
                return <Project key={project.id} project={project} />;
              }
            })}
        </div>
      </section>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>
          Contact.
          <Badge>Status: Hireable</Badge>
        </h2>
        <Form />
      </section>
    </Layout>
  );
};

export default home;
