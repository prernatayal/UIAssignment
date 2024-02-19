'use client'

import useWindowDimensions from '@/Hooks/useWindowDimensions';
import styles from './header.module.scss'
import Image from 'next/image';
import Menu from "../../assests/images/menu.png";
import { useState } from 'react';
import MenuItems from './menu';

const Header = () => {

    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.main}>
            <div>
                <button className={styles.logo}>AFC Inc.</button>
            </div>
            {width < 768 ?
                <Image src={Menu} alt='menu' onClick={() => setIsOpen(!isOpen)} className={styles.image} />
                :
                <div className={styles.section}>
                    <p className={styles.p}>Track Application</p>
                    <p className={styles.p}>Manage My Card</p>
                    <p className={styles.p}>FAQs</p>
                    <button className={styles.button}>Get Started</button>
                </div>
            }
            {isOpen &&
                <MenuItems />
            }
        </section>
    );
}

export default Header;