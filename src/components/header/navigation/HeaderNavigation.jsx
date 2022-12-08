import styles from "./headerNavigation.module.css";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <nav className={styles.navigationBlock}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <Link to="/main" className={styles.navigationLink}>
            ГОЛОВНА
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/menu" className={styles.navigationLink}>
            МЕНЮ
          </Link>
        </li>

        <li className={styles.navigationItem}>
          <Link to="/contacts" className={styles.navigationLink}>
            КОНТАКТИ
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default HeaderNavigation;
