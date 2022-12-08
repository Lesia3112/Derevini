import styles from "./main.module.css";
import umbrella from "assets/main/umbrella.jpg";
import tablle from 'assets/main/tablle.jpg';
import menu from 'assets/main/menu.jpg';
import classNames from "classnames";
import MainText from "./mainText/MainText";


const Main = () => {
  return (
    <div className={classNames (styles.wrapper, styles.container)}>
      <MainText/>
      <div className={styles.imageWrapper}>
        <img className={styles.images} src={menu} alt="menu" />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.images} src={umbrella} alt="umbrella" />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.images} src={tablle} alt="table" />
      </div>
    </div>
  );
};

export default Main;
