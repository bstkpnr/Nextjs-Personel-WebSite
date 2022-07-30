import styles from '../styles/Navbar.module.css'
import Link from "next/link"
const Navbar = ()=>{
    return(
        <div className={styles.container}>
            <Link href='/'>BESTE</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/about">About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/blog">Blog</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/playlist">Playlist</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;