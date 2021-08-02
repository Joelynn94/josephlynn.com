import alertStyles from "../styles/alert.module.css";

const Alert = ({ children }) => {
  return <div className={alertStyles.container}>{children}</div>;
};

export default Alert;
