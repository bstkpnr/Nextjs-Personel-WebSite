import styles from "../styles/Intro.module.css";
import { useRef } from "react";
import Image  from "next/image"
import Link from "next/link";
import Circle from "./Circle";
const Intro = () => {
  const divRef=useRef(null);

  const handleClick = ()=>{
    divRef.current?.scrollIntoView({behavior: 'smooth'})
    console.log("beste")
  }

  
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#F9F5EB" top="-50vh" left="-50vh" />
      <div className={styles.card}>
        <h1 className={styles.title}><span className={styles.brand}>BESTE</span> BESTE TOKPINAR</h1>
        <p className={styles.desc}>
          Okur,Öğrenir,İnşaa Eder
        </p>
        <button className={styles.button} onClick={handleClick} ref={divRef}>KEŞFET</button>
      </div>
      <div className={styles.card}>
     <Image src="/img/kaos.png" alt="" width="100%" height="100%" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Intro;
