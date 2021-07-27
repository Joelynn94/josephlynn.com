import React from "react";
import Logo from "./logo";
import NavLinks from "./navlinks";
import footerStyles from "../styles/footer.module.css";
import UserLinks from "./userlinks";

const footer = ({ config }) => {
  return (
    <footer className={footerStyles.wrapper}>
      <div className={footerStyles.container}>
        <div className={footerStyles.logo}>
          <Logo config={config} />
        </div>
        <div className={footerStyles.links}>
          <NavLinks config={config} />
        </div>
        <div className={footerStyles.social}>
          <UserLinks config={config} />
        </div>
      </div>
    </footer>
  );
};

export default footer;
