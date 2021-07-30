import Link from "next/link";
import Badge from "./badge";
import tagStyles from "../styles/tag.module.css";

function PostTags({ tags }) {
  return (
    <div className={tagStyles.container}>
      {tags &&
        tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <a>
              <Badge>{tag}</Badge>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
