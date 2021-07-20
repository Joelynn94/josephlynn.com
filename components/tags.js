import Link from "next/link";

import styles from "../styles/tag.module.css";

function PostTags({ tags }) {
  return (
    <div className={styles.container}>
      {tags &&
        tags.map((tag) => (
          <Link key={tag} className={styles.badge}>
            <a>
              <button type="button">#{tag}</button>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
