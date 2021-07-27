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
  ...otherProps
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`${buttonStyles.btn} ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
