import Link from "next/link";

const Logo = ({ config }) => {
  return (
    <Link href="/">
      <a>
        <img src={config.siteLogo} alt="Joseph Lynn Site Logo" />
      </a>
    </Link>
  );
};

export default Logo;
