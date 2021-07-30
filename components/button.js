import Link from "next/link";
import buttonStyles from "../styles/button.module.css";

const STYLES = [
  `${buttonStyles.default}`,
  `${buttonStyles.primary}`,
  `${buttonStyles.secondary}`,
  `${buttonStyles.danger}`,
  `${buttonStyles.success}`,
];

const Button = ({
  children,
  type,
  disabled,
  onClick,
  buttonStyle,
  href,
  ...otherProps
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...otherProps}
      href={href}
    >
      <a className={`${buttonStyles.btn} ${checkButtonStyle}`}>{children}</a>
    </Link>
  );
};

export default Button;
