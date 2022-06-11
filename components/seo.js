import Head from "next/head";
import { useRouter } from "next/router";
import config from "../lib/config";

export default function SEO({ description, title }) {
	const router = useRouter();
	const canonical = window.location.host + router.asPath;
	const siteTitle = config.title;
	console.log(canonical);

	return (
		<Head>
			<meta name="description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={siteTitle} />
			<meta property="twitter:card" content="summary" />
			<meta property="twitter:creator" content={config.social.twitter} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<title>{`${title} | ${siteTitle}`}</title>
			<link rel="canonical" href={canonical} />
		</Head>
	);
}
