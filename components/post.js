import Link from "next/link";
import Date from "../components/date";
import PostTags from "./tags";
import postStyles from "../styles/post.module.css";

const Post = ({ post }) => {
  return (
    <article className={postStyles.article} key={post.title}>
      <Link href={`/posts/${post.id}`} className={postStyles.link}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <div className={postStyles.details}>
        <Date dateString={post.date} />
        <PostTags tags={post.tags} />
      </div>
    </article>
  );
};

export default Post;
