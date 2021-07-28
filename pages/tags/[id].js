import Head from "next/head";
import { useRouter } from "next/router";
import Date from "../../components/date";
import Layout from "../../components/layout";
// import { getAllPostTags } from "../../lib/posts";

// export async function getStaticPaths() {
//   const paths = getAllPostTags();
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   console.log(context);
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

const Tag = ({ postData }) => {
  const router = useRouter();
  const { tag } = router.query;
  console.log(router);

  return (
    <Layout>
      <Head>
        <title>Joseph Lynn | Blog</title>
      </Head>
      <p>{tag}</p>
    </Layout>
  );
};

export default Tag;
