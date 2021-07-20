import Link from "next/link";
import Date from "../components/date";
import PostTags from "./tags";
import styles from "../styles/post.module.css";

const Post = ({ post }) => {
  return (
    <article className={styles.article} key={post.title}>
      <Link className={styles.link} href={`/posts/${post.id}`}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <div className={styles.details}>
        <Date dateString={post.date} />
        <PostTags tags={post.tags} />
      </div>
    </article>
  );
};

export default Post;
