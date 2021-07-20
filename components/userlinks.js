import Link from "next/link";
import socialStyles from "../styles/social.module.css";

function UserLinks({ config }) {
  const { userLinks } = config;

  return (
    <ul className={socialStyles.links}>
      {userLinks &&
        userLinks.map((link) => (
          <Link href={link.url} key={link.label}>
            <a className={socialStyles.link} target="_blank">
              <img
                className={socialStyles.icon}
                src={link.icon}
                alt={`${link.label} icon`}
              />
            </a>
          </Link>
        ))}
    </ul>
  );
}

export default UserLinks;
