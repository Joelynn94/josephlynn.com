import React from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import UserLinks from "./Userlinks";
import footerStyles from "../styles/footer.module.css";

const Footer = ({ config }) => {
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

export default Footer;
