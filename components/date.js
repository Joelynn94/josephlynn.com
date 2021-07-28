import { parseISO, format } from "date-fns";
import postStyles from "../styles/post.module.css";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className={postStyles.time} dateTime={dateString}>
      Posted On: {format(date, "LLLL d, yyyy")}
    </time>
  );
}
