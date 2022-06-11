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

const blog = ({ allPostsData }) => {
	return (
		<Layout>
			<Head>
				<meta
					name="description"
					content="Personal blog for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. This is my own platform to write about topics I find important and where I can share my findings on the topics to help other developers."
				/>
				<meta
					name="og:title"
					content="Personal blog for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. This is my own platform to write about topics I find important and where I can share my findings on the topics to help other developers."
				/>
				<meta
					name="twitter:description"
					content="Personal blog for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. This is my own platform to write about topics I find important and where I can share my findings on the topics to help other developers."
				/>
				<title>Joseph Lynn | Blog</title>
			</Head>
			<section className={utilStyles.section}>
				<h1 className={utilStyles.title}>Blog Posts</h1>
				{allPostsData &&
					allPostsData.map((post) => (
						<Post key={post.id} post={post} />
					))}
			</section>
		</Layout>
	);
};

export default blog;
