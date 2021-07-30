import Link from "next/link";
import authorStyles from "../styles/author.module.css";

const AuthorInfo = ({ config }) => {
  return (
    <section className={authorStyles.section}>
      <p className={authorStyles.name}>Written by {config.author.name}</p>
      <p className={authorStyles.links}>
        {config.userLinks.map((link) => (
          <Link href={link.url} key={link.label}>
            <a>{link.label} </a>
          </Link>
        ))}
      </p>
    </section>
  );
};

export default AuthorInfo;
