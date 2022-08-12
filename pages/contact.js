import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
import { data } from "../data";

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
      <Circle backgroundColor="green"  right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <div>
        
      </div>

      
    </div>
  );
};

export default contact;
