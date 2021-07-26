import Link from "next/link";
import navlinksStyles from "../styles/navlinks.module.css";

const NavLinks = ({ config }) => {
  const { siteLinks } = config;

  return (
    <ul className={navlinksStyles.links}>
      {siteLinks &&
        siteLinks.map((link) => (
          <Link href={link.url} key={link.url} className={navlinksStyles.link}>
            <a className={navlinksStyles.link}>{link.label}</a>
          </Link>
        ))}
    </ul>
  );
};

export default NavLinks;
