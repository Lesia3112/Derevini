import styles from "./mainText.module.css";
import Logo from "components/logo/Logo";

const MainText = () => {
  return (
    <div className={styles.textBlock}>
      <h1 className={styles.title}>DEREVINI BURGERS</h1>
      <p className={styles.text}>Найсмачніші крафтові бургери.  Derevini Burgers це завжди смачно , якісно і доступно. Використовуємо лише продукти найвищої якості.  У нас ви можете спробувати як бургери різних видів, так і гамбургери та чізбургери. А ще чікен-рол, фрі, нагетси, крокети та гострі крильця. Різноманітні напої та коктелі. Запашна кава та різні види чаю.   </p>
    </div>
  );
};

export default MainText