import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
import Image from 'next/image'

const Contact = ({dataContact}) => {

  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
      <Circle backgroundColor="green"  right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <div className={styles.cardL}>
        {dataContact.val.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={img.url}  objectFit="cover" alt=""  layout="responsive" width="100%" height="100%" />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
                <h1>{dataContact.title}</h1>
            </div>
      
    </div>
  );
};
export default Contact;