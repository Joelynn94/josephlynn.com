import Link from "next/link";
import Date from "../components/date";
import PostTags from "./tags";
import postStyles from "../styles/post.module.css";

const Post = ({ post }) => {
  return (
    <article className={postStyles.article} key={post.title}>
      <Date dateString={post.date} />
      <Link href={`/posts/${post.id}`} className={postStyles.link}>
        <a>
          <h3 className={postStyles.title}>{post.title}</h3>
        </a>
      </Link>
      <PostTags tags={post.tags} />
      <p className={postStyles.excerpt}>{post.excerpt}</p>
      <div className={postStyles.details}>
        <Link href={`/posts/${post.id}`} className={postStyles.link}>
          <a>
            <button className={postStyles.button}>Read More &rarr;</button>
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
