'use client'

import styles from "./index.module.scss";
import Image from "next/image";
import Arrow from "../../assests/images/arrow.png";
import useWindowDimensions from "@/Hooks/useWindowDimensions";

const CreditCard = () => {

    const { width } = useWindowDimensions();

    return (
        <section className={styles.main}>
            <div className={styles.heading}>The Freedom to Create The Credit Card You Want</div>
            <div>
                <p className={styles.subheading}>That why it comes with benefits & rewards chosen by you. Available in multiple designs, your card comes in a style selected by you. You can come back each year, to edit your benefits or update your style.</p>
                <p className={styles.subheading}>Your OneSync Credit Card stays true to you, year after year. It’s the only card you’ll ever need.</p>
                {width < 768 ?
                    <div className={styles.selectSection}>
                        <select className={styles.select}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Pune</option>
                        </select>
                        <button className={styles.button}>Go</button>
                    </div>
                    :
                    <a href="#" className={styles.a}>Get Started
                        <Image src={Arrow} alt="arrow" />
                    </a>
                }
            </div>
        </section>
    );
}
export default CreditCard;