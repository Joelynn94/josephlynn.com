import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Post from "../components/post";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Blog</title>
      </Head>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.title}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
