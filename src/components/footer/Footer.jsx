import styles from "./footer.module.css";
import classNames from "classnames";
import Logo from "components/logo/Logo";
import { GrFacebook, GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className={classNames(styles.footer, styles.container)}>
      <h1 className={styles.title}>DEREVINI <Logo /> BURGERS</h1>
      <div className={styles.iconWrapper}>
        <a className={styles.link} href="https://www.instagram.com/derevini_burgers/"><GrInstagram/></a>
        <a className={styles.link} href="https://www.facebook.com/Derevini.com.ua"><GrFacebook/></a>
      </div>
      <span className={styles.orderNumer}>Замовлення та доставка за номером +38(093)333-78-58</span>

    </footer>
  );
};

export default Footer