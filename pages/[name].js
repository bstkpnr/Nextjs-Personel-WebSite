import {data} from '../data'
import styles from '../styles/Product.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({product}) =>{
    return(
        <div className={styles.container}>
          <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={img.url}  objectFit="cover" alt=""  layout="responsive" width="100%" height="100%" />
          </div>
        ))}
      </div>
            <div className={styles.cardS}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.desc}>{product.desc}</p>
                <button className={styles.button}>
                    <Link href="/contact">Contact</Link>
                </button>
            </div>


        </div>
    )
}

export const getStaticPaths = async ()=>{
    const products = data
    const paths = products.map(item=>{
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
    const product = data.filter(item=>item.name === name)[0];
    return {
        props: {product},
    }
}

export default Product;