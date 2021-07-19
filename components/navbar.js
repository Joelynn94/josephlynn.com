import Logo from "./logo";
import NavLinks from "./navlinks";
import styles from "../styles/navbar.module.css";

const Navbar = ({ config }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo config={config} />
        </div>
        <NavLinks config={config} />
      </div>
    </nav>
  );
};

export default Navbar;
