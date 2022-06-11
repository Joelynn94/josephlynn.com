import Link from "next/link";
import Image from "next/image";
import socialStyles from "../styles/social.module.css";

function UserLinks({ config }) {
	const { userLinks } = config;

	return (
		<ul className={socialStyles.links}>
			{userLinks &&
				userLinks.map((link) => (
					<Link href={link.url} key={link.label}>
						<a className={socialStyles.link} target="_blank">
							<Image
								className={socialStyles.icon}
								src={link.icon}
								alt={`${link.label} icon`}
								width={32}
								height={32}
							/>
						</a>
					</Link>
				))}
		</ul>
	);
}

export default UserLinks;
