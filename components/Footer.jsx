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
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          İZMİR <br /> TÜRKİYE
        </div>
        <div className={styles.cardItem}>tokpinarbeste@gmail.com</div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW ME: <br /> __IN __TW __LI
        </div>
        <div className={styles.cardItem}>
          2022 BESTE TOKPINAR,
          <br />
          BLA BLA{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
