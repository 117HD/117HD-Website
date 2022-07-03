import styles from '../styles/Footer.module.css'

import Link from 'next/link'

import {FaPaintBrush} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.contentLeft}>
                Copyright © 2022 117 HD
            </div>
            <div className={styles.contentRight}>
                <ul>
                    <Link href={"https://github.com/117HD"}><a className={styles.buttonRight}><FaPaintBrush height={20}/> Design by Mark</a></Link>
                </ul>
            </div>

        </footer>

    );
}

export default Footer;