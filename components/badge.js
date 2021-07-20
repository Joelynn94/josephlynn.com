import badgeStyles from "../styles/badge.module.css";

const badge = ({ children }) => {
  return <span className={badgeStyles.block}>{children}</span>;
};

export default badge;
