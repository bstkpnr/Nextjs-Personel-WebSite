import styles from "../../styles/Contact.module.css";
import Circle from "../../components/Circle";
import { mycontact } from "../../data";

const MyContact = ({dataContact}) => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
      <Circle backgroundColor="green"  right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <div className={styles.cardL}>
        {dataContact.val.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={img.logo}  objectFit="cover" alt="" />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
                <h1>{dataContact.title}</h1>
            </div>
      
    </div>
  );
};


export const getStaticPaths = async ()=>{
  const myContact = mycontact
  const paths = myContact.map(item=>{
      return {
          params:{contact: item.contact}
      }
  });

  return{
      paths,
      fallback:false,
  };
};

export const getStaticProps = async (context) =>{
  const contact = context.params.contact;
  const dataInfo = mycontact.filter(item=>item.contact === contact)[0];
  return {
      props: {dataInfo},
  }
}


export default MyContact;
