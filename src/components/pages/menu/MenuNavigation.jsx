import { Link } from 'react-router-dom';
import styles from "./menuNavigation.module.css";
// import Burgers from './menuPages/burgers/Burgers'
// import { Routes, Route } from 'react-router-dom'


const MenuNavigation = () => {
  return (
    
      <div className={styles.wrapper}>
        <h1 className={styles.title}>МЕНЮ</h1>
        <nav className={styles.navigationBlock}>
          
          <li className={styles.navigationItem}>
            <Link to="/menu/burgers" className={styles.navigationLink}>
              БУРГЕРИ
            </Link>
          </li>

          <li className={styles.navigationItem}>
            <Link to="/menu/role" className={styles.navigationLink}>
              РОЛИ
            </Link>
          </li>

          <li className={styles.navigationItem}>
            <Link to="/menu/dodatku" className={styles.navigationLink}>
              ДОДАТКИ
            </Link>
          </li>

          <li className={styles.navigationItem}>
            <Link to="/menu/drinks" className={styles.navigationLink}>
              НАПОЇ
            </Link>
          </li>
        </nav>
        
      </div>
    
  )
}

export default MenuNavigation
