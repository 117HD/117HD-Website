import styles from '../styles/Header.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

import {useState} from 'react'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const iconOpen = <GiHamburgerMenu size='20px' color='white' onClick={() => setOpen(!open)}/>

    const iconClose = <GrClose size='20px' color='white' onClick={() => setOpen(!open)}/>

    return (
        <nav className={styles.navbarNavMobile}>
            {open ? iconClose : iconOpen}
            {open && <MobileLinks/>}
        </nav>
    );
}

export default MobileNavigation;

const MobileLinks = () => {

    return (


        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
        </ul>


    );
}