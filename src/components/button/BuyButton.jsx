import styles from './buyButton.module.css'

const Button = () => {
  return (
      <button className={styles.button} type="button">
        <span className={styles.buttonText}> ЗАМОВИТИ</span>
      </button>
  )
}

export default Button