import buttonStyles from "../styles/button.module.css";

const arrowsRight = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 17L13 9L9 1" stroke="#1ddecb" />
    <path opacity="0.5" d="M5 17L9 9L5 1" stroke="#1ddecb" />
    <path opacity="0.25" d="M1 17L5 9L1 1" stroke="#1ddecb" />
  </svg>
);

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
  icon,
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
      {icon && (
        <div className={buttonStyles.square}>
          <img src={arrowsRight} alt="Arrows pointing to the right" />
        </div>
      )}
      <div className={buttonStyles.text}>{children}</div>
    </button>
  );
};

export default Button;
