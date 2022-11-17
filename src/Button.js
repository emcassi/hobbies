import styles from "./Button.module.css";

function Button(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={props.image} alt='' />
      <p>{props.children}</p>
    </button>
  );
}
export default Button;
