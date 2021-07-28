import Head from "next/head";
import Link from "next/link";

import config from "../lib/config";
import projectData from "../lib/projects";
import { getLatestPosts } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import UserLinks from "../components/userlinks";
import Post from "../components/post";
import Button from "../components/button";
import Badge from "../components/badge";
import Form from "../components/form";
import buttonStyles from "../styles/button.module.css";
import heroStyles from "../styles/hero.module.css";
import utilStyles from "../styles/utils.module.css";
import Project from "../components/project";

export async function getStaticProps() {
  const lastestPosts = getLatestPosts();
  return {
    props: {
      lastestPosts,
    },
  };
}

export default function Home({ lastestPosts }) {
  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Home</title>
      </Head>
      <section className={utilStyles.section}>
        <div className={heroStyles.container}>
          <div className={heroStyles.content}>
            <h1 className={heroStyles.heading}>I'm Joseph Lynn</h1>
            <h2 className={heroStyles.subheading}>Frontend Web Developer</h2>
            <p className={heroStyles.blurb}>
              Based in Tampa, Florida - I enjoy solving business problems and
              building web applications that have a great user experience. You
              can see what I'm coding on GitHub, view my professional profile on
              LinkedIn, or see what I am writing on my blog.
            </p>
            <UserLinks config={config} />
          </div>
          <div className={heroStyles["img-wrapper"]}>
            <img
              className={heroStyles.img}
              src="/images/profile.jpg"
              alt="Headshot of Joseph Lynn"
            />
          </div>
        </div>
      </section>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>
          Latest Posts.
          <Link href="/blog">
            <a>
              <Button buttonStyle={buttonStyles.secondary}>View All</Button>
            </a>
          </Link>
        </h2>
        {lastestPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>
          Projects.
          <Link href="/projects">
            <a>
              <Button buttonStyle={buttonStyles.secondary}>View All</Button>
            </a>
          </Link>
        </h2>
        <div className="project-grid">
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
}
