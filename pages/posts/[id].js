import Head from "next/head";
import config from "../../lib/config";
import { getAllPostIds, getPostData } from "../../lib/posts";
import AuthorInfo from "../../components/author-info";
import Date from "../../components/date";
import Layout from "../../components/layout";
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

const post = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<meta name="description" content={postData.excerpt} />
				<meta name="og:title" content={postData.excerpt} />
				<meta name="twitter:description" content={postData.excerpt} />
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
};

export default post;
