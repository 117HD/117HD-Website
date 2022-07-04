import styles from '../styles/Header.module.css'
import {FaDiscord, FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";
import Links from "./Links";

const Navigation = () => {

    return (
        <>
            <div className={styles.headerLeft}>
                {Links.map(link => (
                    <Link key={link.url} href={link.url}><a className={styles.navLink}>{link.name}</a></Link>
                ))}
            </div>
            <div className={styles.headerRight}>
                <ul className={styles.navbarNav}>
                    <Link href={"https://github.com/117HD"}><a className={styles.buttonRight}><FaGithub size={20}/></a></Link>
                    <Link href={"https://discord.gg/tS4VrRv68T"}><a className={styles.buttonRight}><FaDiscord size={20}/></a></Link>
                    <Link href={"https://mobile.twitter.com/117scape"}><a className={styles.buttonRight}><FaTwitter size={20}/></a></Link>
                    <Link href={"https://discord.gg/Z3GgPdVu9b"}><a className={styles.buttonRight}><FaYoutube size={20}/></a></Link>
                </ul>
            </div>
        </>

    );
}

export default Navigation;