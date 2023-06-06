import Image from "next/image";
import Button from "./button";
import UserLinks from "./userlinks";
import buttonStyles from "../styles/button.module.css";
import heroStyles from "../styles/hero.module.css";

const Hero = ({ config }) => {
	return (
		<div className={heroStyles.container}>
			<div className={heroStyles.content}>
				<h1 className={heroStyles.heading}>Joseph Lynn</h1>
				<h2 className={heroStyles.subheading}>Frontend Developer</h2>
				<p className={heroStyles.blurb}>
					I'm looking to expand my network and take on more projects
					in the Tampa, FL area. I enjoy solving business problems and
					building web applications that have a great look (UI) and
					user experience (UX).
				</p>
				<a href="#contact" className={heroStyles.cta}>
					Tell me about your project
				</a>
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
