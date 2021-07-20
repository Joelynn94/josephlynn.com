import Link from "next/link";
import navlinksStyles from "../styles/navlinks.module.css";

const NavLinks = ({ config }) => {
  const { siteLinks } = config;

  return (
    <ul className={navlinksStyles.links}>
      {siteLinks &&
        siteLinks.map((link) => (
          <Link className={navlinksStyles.link} href={link.url} key={link.url}>
            <a className={navlinksStyles.link}>{link.label}</a>
          </Link>
        ))}
    </ul>
  );
};

export default NavLinks;
