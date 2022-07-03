import Link from 'next/link'

import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
    return (
        <div className={styles.headerSection}>
            <Link href={"/"}><a className={styles.logoImage}><Image alt= "hey" src="/logo.png" width={180} height={63}  ></Image></a></Link>
            <Navigation/>
            <MobileNavigation/>
        </div>
    );
}

export default Header;