import Image from "next/image";
import Link from "next/link";

const Logo = ({ config }) => {
	return (
		<Link href="/">
			<a>
				<Image
					src={config.siteLogo}
					alt="Joseph Lynn Site Logo"
					width={54}
					height={64}
				/>
			</a>
		</Link>
	);
};

export default Logo;
