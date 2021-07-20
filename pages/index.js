import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import config from "../lib/config";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import UserLinks from "../components/userlinks";
import Post from "../components/post";
import heroStyles from "../styles/hero.module.css";
import utilStyles from "../styles/utils.module.css";
import Button from "../components/button";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.section}>
        <div className={heroStyles.container}>
          <div className={heroStyles.content}>
            <h1>I'm Joseph Lynn</h1>
            <h2>Frontend Web Developer</h2>
            <p>
              Web developer based in Tampa, Florida who enjoys building web
              applications with a great user experience. You can view my
              projects on GitHub, professional profile on LinkedIn, or download
              my resume.
            </p>
            <UserLinks config={config} />
          </div>
          <div className={heroStyles.headshot}>
            <img
              className={heroStyles.img}
              src="/images/profile.jpg"
              alt="Headshot of Joseph Lynn"
            />
          </div>
        </div>
      </section>
      <section className={`${utilStyles.section}`}>
        <h2 className={utilStyles.title}>
          Latest Post.
          <Link href="/blog">
            <Button buttonStyle="btn--secondary">View All</Button>
          </Link>
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </section>
      <section>
        <h2></h2>
      </section>
    </Layout>
  );
}
