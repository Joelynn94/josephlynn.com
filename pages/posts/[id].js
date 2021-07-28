import Head from "next/head";
import config from "../../lib/config";
import AuthorInfo from "../../components/author-info";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import markdownStyles from "../../styles/markdown-styles.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={markdownStyles.wrapper}>
        <header className={markdownStyles.header}>
          <h1>{postData.title}</h1>
          <Date dateString={postData.date} />
          <AuthorInfo config={config} />
        </header>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}
