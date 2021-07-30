import badgeStyles from "../styles/badge.module.css";

const Badge = ({ children }) => {
  return <span className={badgeStyles.container}>{children}</span>;
};

export default Badge;
