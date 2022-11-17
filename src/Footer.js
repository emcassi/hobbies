import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src='logo.png' alt='' />
      <p>
        Made by Alex <a href='https://www.github.com/emcassi'>(GitHub)</a>
      </p>
    </div>
  );
}
export default Footer;
