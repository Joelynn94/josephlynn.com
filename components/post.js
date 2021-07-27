import Link from "next/link";
import Date from "./date";
import PostTags from "./tags";
import Button from "./button";
import postStyles from "../styles/post.module.css";

const Post = ({ post }) => {
  return (
    <article className={postStyles.article} key={post.title}>
      <Date dateString={post.date} />
      <Link href={`/posts/${post.id}`}>
        <a className={postStyles.link}>
          <h3 className={postStyles.title}>{post.title}</h3>
        </a>
      </Link>
      <PostTags tags={post.tags} />
      <p className={postStyles.excerpt}>{post.excerpt}</p>
      <Link href={`/posts/${post.id}`} className={postStyles.link}>
        <a className={postStyles["read-more"]}>Read More &rarr;</a>
      </Link>
    </article>
  );
};

export default Post;
