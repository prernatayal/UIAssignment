'use client'

import useWindowDimensions from "@/Hooks/useWindowDimensions";
import styles from "./footer.module.scss"
import { useEffect, useState } from "react";

const Footer = () => {

    const [links, setLinks] = useState([1, 2, 3, 4]);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width < 768) {
            setLinks([1]);
        }
        else {
            setLinks([1, 2, 3, 4]);
        }
    }, [width])

    return (
        <section className={styles.main}>
            <div className={styles.section1}>
                <p className={styles.heading}>OneSync Credit Card</p>
                <p className={styles.subheading}>Experience Freedom</p>
                <button className={styles.button}>Get Started</button>
            </div>
            <div className={styles.footerLinks}>
                {links?.map((item, key) => {
                    return (
                        <div className={styles.section2} key={key} >
                            <p className={styles.p}>Manage Your Card</p>
                            <p className={styles.p}>Track Your Application</p>
                            <p className={styles.p}>Contact Us</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Footer;