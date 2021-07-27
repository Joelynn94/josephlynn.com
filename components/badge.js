import badgeStyles from "../styles/badge.module.css";

const badge = ({ children }) => {
  return <span className={badgeStyles.container}>{children}</span>;
};

export default badge;
