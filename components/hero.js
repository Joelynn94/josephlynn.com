import Image from "next/image";
import UserLinks from "./userlinks";
import heroStyles from "../styles/hero.module.css";

const Hero = ({ config }) => {
	return (
		<div className={heroStyles.container}>
			<div className={heroStyles.content}>
				<h1 className={heroStyles.heading}>I'm Joseph Lynn</h1>
				<h2 className={heroStyles.subheading}>
					Frontend Web Developer
				</h2>
				<p className={heroStyles.blurb}>
					Based in Tampa, Florida - I enjoy solving business problems
					and building web applications that have a great look (UI)
					and user experience (UX). See what I'm coding on GitHub,
					view my professional profile on LinkedIn, or check out what
					I am writing on my blog.
				</p>
				<UserLinks config={config} />
			</div>
			<div className={heroStyles["img-wrapper"]}>
				<Image
					className={heroStyles.img}
					src="/images/headshot.jpg"
					alt="Headshot of Joseph Lynn"
					height={362}
					width={362}
				/>
			</div>
		</div>
	);
};

export default Hero;
