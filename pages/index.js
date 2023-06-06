import Head from "next/head";
import { Widget } from "@typeform/embed-react";
import config from "../lib/config";
import projectData from "../lib/projects";
import { getLatestPosts } from "../lib/posts";
import Layout from "../components/layout";
import Button from "../components/button";
import Hero from "../components/hero";
import Post from "../components/post";
import Project from "../components/project";
import Badge from "../components/badge";
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
					Projects.
					<Button
						buttonStyle={buttonStyles.secondary}
						href="/projects"
					>
						View All
					</Button>
				</h2>
				<div className={projectStyles["grid-project"]}>
					{projectData &&
						projectData.map((project) => {
							if (project.isFeatured) {
								return (
									<Project
										key={project.id}
										project={project}
									/>
								);
							}
						})}
				</div>
			</section>
			<section id="contact" className={utilStyles.section}>
				<h2 className={utilStyles.title}>
					Contact.
					<Badge>Status: Hireable</Badge>
				</h2>
				<p>
					Have a project you need help with? Fill out the form below
					and I'll get in touch!
				</p>
				<Widget
					id="Lk2i2dVt"
					style={{
						width: "100%",
						height: "500px",
						marginTop: "1rem",
					}}
				/>
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
		</Layout>
	);
};

export default home;
