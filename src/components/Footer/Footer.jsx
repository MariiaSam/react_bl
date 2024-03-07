import styles from "./footer.module.css"

const Footer = () => {
    return (
      <footer>
        <a href="/">Site logo</a>
        <button className={styles.btn}>Footer BTN</button>
      </footer>
    );
  };
  
  export default Footer;