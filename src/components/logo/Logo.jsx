import styles from "./logo.module.css";
import logo from "assets/logo/logo.jpg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
