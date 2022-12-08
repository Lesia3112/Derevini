import classNames from "classnames";
import styles from "./productCard.module.css";
import Button from "components/button/BuyButton";

const ProductCard = (props) => {
  return (
      <div className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img className={styles.images} src={props.images} alt="classic" />
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.descriptionTitle}>{props.name}</h2>
          <p className={styles.description}>{props.storage}</p>
        </div>
        <div className={styles.priceButtonWrapper}>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{props.price} грн</span>
          </div>
          <Button />
        </div>
      </div>
  )
};

export default ProductCard;
