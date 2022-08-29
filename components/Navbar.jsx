import styles from '../styles/Navbar.module.css'
import Link from "next/link"
const Navbar = ()=>{
    return(
        <div className={styles.container}>
            <Link href='/'>BESTE TOKPINAR</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/about" >Hakkımda</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/blog">Blog</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/playlist">Playlist</Link>
                </li>
                {/* <li className={styles.listItem}>
                    <Link href={{pathname:'/[contact]', query:{contact: 'contact'}}}>İletişim</Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Navbar;