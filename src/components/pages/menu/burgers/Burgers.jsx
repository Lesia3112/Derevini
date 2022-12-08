import styles from "./burgers.module.css";
import classNames from "classnames";
import ProductCard from "components/productCard/ProductCard";
import classic from "assets/burgers/classic.jpg";
import black from "assets/burgers/black.jpg";
import cezar from "assets/burgers/cezar.jpg";
import gawai from "assets/burgers/gawai.jpg";
import dablburger from "assets/burgers/dablburger.jpg";
import cheese from "assets/burgers/cheese.jpg";

const Burgers = () => {
  return (
    <div className={classNames(styles.wrapper, styles.container)}>
      <ProductCard
        images={classic}
        name="КЛАСИЧНИЙ "
        storage="Булочка, свинна котлета, соуси, айсберг, чеддер, помідор, огірок квашений, цибуля"
        price="80 "
      />
      <ProductCard
        images={black}
        name="ЧОРНИЙ "
        storage="Булочка чорна, свинна котлета, соуси, айсберг, чеддер, помідор, огірок квашений, цибуля" price="90 "
      />
      <ProductCard
        images={cezar}
        name="ЦЕЗАР "
        storage="Булочка, курка, соуси, айсберг, пармезан, помідор, цибуля" price="90 "
      />
      <ProductCard
        images={gawai}
        name="ГАВАЙСЬКИЙ "
        storage="Булочка, курка, соуси, айсберг, чеддер, помідор, цибуля, ананас" price="120 "
      />
      <ProductCard
        images={dablburger}
        name="ДАБЛ БУРГЕР "
        storage="Булочка, дві свинні котлети, соуси, айсберг, два чеддері, помідор, огірок квашений, цибуля" price="130 "
      />
      <ProductCard
        images={cheese}
        name="ЧІЗБУРГЕР "
        storage="Булочка,  свинна котлета, соуси,   чеддер,  огірок квашений, цибуля" price="55 "
      />
    </div>
  );
};

export default Burgers;
