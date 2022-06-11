import Head from "next/head";
import { useRouter } from "next/router";
import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import Post from "../../components/post";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
	// tags to create pages from
	const tags = [
		"javascript",
		"react",
		"api",
		"snippet",
		"objects",
		"arrays",
		"todoapp",
		"fetch",
		"localstorage",
		"classes",
		"oop",
		"inheritance",
		"beginners",
	];
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
				<meta
					name="description"
					content={`This page shows a list of all other posts listed on this website related to the tag you searched for: ${tag}. There are ${relatedPosts.length} related to the tag you search for: ${tag}.`}
				/>
				<meta
					name="og:title"
					content={`This page shows a list of all other posts listed on this website related to the tag you searched for: ${tag}. There are ${relatedPosts.length} related to the tag you search for: ${tag}.`}
				/>
				<meta
					name="twitter:description"
					content={`This page shows a list of all other posts listed on this website related to the tag you searched for: ${tag}. There are ${relatedPosts.length} related to the tag you search for: ${tag}.`}
				/>
				<title>Joseph Lynn | Posts Related To Tag: {tag}</title>
			</Head>
			<header className={`${utilStyles.section} py-8`}>
				<h2>Posts tagged: {tag}</h2>
				<h3>
					{relatedPosts.length > 2
						? `${relatedPosts.length} posts found.`
						: `${relatedPosts.length} post found.`}
				</h3>
			</header>
			<section className={utilStyles.section}>
				<h1 className={utilStyles.title}>Posts Related To: {tag}</h1>
				{relatedPosts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</section>
		</Layout>
	);
};

export default Tag;
