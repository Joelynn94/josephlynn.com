import Logo from "./Logo";
import NavLinks from "./Navlinks";
import navbarStyles from "../styles/navbar.module.css";

const Navbar = ({ config }) => {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.logo}>
          <Logo config={config} />
        </div>
        <NavLinks config={config} />
      </div>
    </nav>
  );
};

export default Navbar;
