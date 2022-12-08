import { Route,Routes  } from 'react-router-dom';
import styles from "./menu.module.css";
import classNames from "classnames";
// import Burgers from './burgers/Burgers';
import { useNavigate } from "react-router-dom";
import Burgers from "./burgers/Burgers";
import MenuNavigation from "./MenuNavigation";

const Menu = () => {
  return (
    <div className={classNames(styles.wrapper, styles.container)}>
      <MenuNavigation />
      <Routes>
        {/* <Route path="/menu/*" element={<MenuNavigation />} /> */}
        <Route path="/burgers" element={<Burgers />} />
        {/* <Route path="/role" element={<Role />} /> */}
        {/* <Route path="/menu/dodatku" element={<Dodatku />} />
      <Route path="/menu/drinks" element={<Drinks />} /> */}
      </Routes>
    </div>
  );
};

export default Menu;
