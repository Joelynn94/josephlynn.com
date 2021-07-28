import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Post from "../../components/post";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  // tags to create pages from
  const tags = ["javascript", "react", "api", "snippet"];
  // create pages for each tag
  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // get all sorted posts
  const postData = await getSortedPostsData();

  // check how many posts have the tag name
  const relatedPosts = postData.filter((data) =>
    data.tags.includes(params.tag)
  );

  return {
    props: {
      relatedPosts,
    },
  };
}

const Tag = ({ relatedPosts }) => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Tag: {tag}</title>
      </Head>
      <h2>Posts tagged: {tag}</h2>
      <h3>
        {relatedPosts.length > 2
          ? `${relatedPosts.length} posts found.`
          : `${relatedPosts.length} post found.`}
      </h3>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Related Posts</h1>
        {relatedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default Tag;
