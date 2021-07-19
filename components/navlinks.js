import Link from "next/link";
import styles from "../styles/navlinks.module.css";

const NavLinks = ({ config }) => {
  const { siteLinks } = config;

  return (
    <ul className={styles.links}>
      {siteLinks &&
        siteLinks.map((link) => (
          <Link className={styles.link} href={link.url} key={link.url}>
            <a className={styles.link}>{link.label}</a>
          </Link>
        ))}
    </ul>
  );
};

export default NavLinks;
