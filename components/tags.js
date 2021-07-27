import Link from "next/link";

import tagStyles from "../styles/tag.module.css";

function PostTags({ tags }) {
  return (
    <div className={tagStyles.container}>
      {tags &&
        tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag} className={tagStyles.badge}>
            <a>
              <button type="button" className="uppercase text-sm">
                {tag}
              </button>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
