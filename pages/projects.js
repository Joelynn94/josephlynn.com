import Head from "next/head";
import Layout from "../components/layout";
import Project from "../components/project";
import projectData from "../lib/projects";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/project.module.css";

const projects = () => {
	return (
		<Layout>
			<Head>
				<meta
					name="description"
					content="Personal projects for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. Here I share the projects I've worked on and proud to show off the work I've done."
				/>
				<meta
					name="og:title"
					content="Personal projects for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. Here I share the projects I've worked on and proud to show off the work I've done."
				/>
				<meta
					name="twitter:description"
					content="Personal projects for Joseph Lynn, a Frontend Web Developer based in Tampa, Florida. Here I share the projects I've worked on and proud to show off the work I've done."
				/>
				<title>Joseph Lynn | Projects</title>
			</Head>
			<section className={utilStyles.section}>
				<h1 className={utilStyles.title}>Projects</h1>
				<div className={projectStyles["grid-project"]}>
					{projectData &&
						projectData.map((project) => (
							<Project key={project.id} project={project} />
						))}
				</div>
			</section>
		</Layout>
	);
};

export default projects;
