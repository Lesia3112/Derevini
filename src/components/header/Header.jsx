import styles from "./header.module.css";
// import '../../App.css';
import classNames from "classnames";
import Logo from "components/logo/Logo";
// import LogoText from 'elements/logo/Logo-text';
import HeaderNavigation from "./navigation/HeaderNavigation";
import {FaShoppingCart} from  'react-icons/fa'
import { useState } from "react";

const Header = () => {
  let[basketOpen, setBasketOpen] =useState(false);

  return (
    <header className={classNames(styles.header, styles.container)}>
      <Logo/>
      <HeaderNavigation/>
      <FaShoppingCart onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`${styles.basketIcon}  ${basketOpen ? styles.active : '' }`}/>

      {basketOpen &&(
        <div className={styles.basket}>
          <h1>Корзина покупок</h1>
        </div>
      )

      }
      <div className={styles.schedule}>
        <span className={styles.scheduleText}>Працюємо з 9:00 до 22:00 {" "}</span>
        <span className={styles.workNumber}>+38(093)333-78-58</span>
      </div>
    </header>
  );
};

export default Header
