import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Beste's</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}>ME</span>
            <Image src="/img/link.png" width="20px" height="20px" alt="" />
          </a>
        </h1>
        <ul className={styles.ulContainer}>
          <li className={styles.liContainer}>
            <a
              href="https://twitter.com/devbastet"
              className={styles.aContainer}
            >
              Twitter
            </a>
          </li>
          <li className={styles.liContainer}>
            <a href="mailto:tokpinarbeste@gmail.com" className={styles.aContainer}>
              Email
            </a>
          </li>
          <li className={styles.liContainer}>
            <a href="https://github.com/bstkpnr" className={styles.aContainer}>
              Github
            </a>
          </li>
          <li className={styles.liContainer}>
            <p className={styles.pContainer}>👋</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
