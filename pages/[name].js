import {data} from '../data'
import styles from '../styles/MyInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MyInfo = ({dataInfo}) =>{
    return(
        <div className={styles.container}>
          <div className={styles.cardL}>
        {dataInfo.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={img.url}  objectFit="cover" alt=""  layout="responsive" width="100%" height="100%" />
          </div>
        ))}
      </div>
            <div className={styles.cardS}>
                <h1 className={styles.title}>{dataInfo.title}</h1>
                <p className={styles.desc}>{dataInfo.desc}</p>
                <button className={styles.button}>
                    <Link href="/contact">İletişim</Link>
                </button>
            </div>


        </div>
    )
}

export const getStaticPaths = async ()=>{
    const myInfo = data
    const paths = myInfo.map(item=>{
        return {
            params:{name: item.name}
        }
    });

    return{
        paths,
        fallback:false,
    };
};

export const getStaticProps = async (context) =>{
    const name = context.params.name;
    const dataInfo = data.filter(item=>item.name === name)[0];
    return {
        props: {dataInfo},
    }
}

export default MyInfo;