'use client'

import styles from "./mobilr.module.scss";
import formImg from "../../assests/images/Animation.png";
import Image from "next/image";
import Arrow from "../../assests/images/arrow-right.png";
import { useEffect, useRef, useState } from "react";

const MobileFormSection = () => {

    const [inView, setInView] = useState(false);
    const animationRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        if (animationRef?.current) {
                            observer?.unobserve(animationRef.current);
                        }

                    }
                });
            },
            { triggerOnce: true, threshold: 0.1 }
        );
        if (animationRef.current) {
            observer.observe(animationRef.current);
        }
    });

    return (
        <section className={`${styles.main} ${inView && styles.animation} `} ref={animationRef} >
            <p className={styles.heading}>Create your own credit card in three easy steps</p>
            <div className={styles.section}>
                <Image src={formImg} alt="formImg" className={styles.image} />
                <p className={styles.p}>Fill Eligibility Form</p>
                <p className={styles.p1}>Please fill an application form to make sure you’re eligible for the card. You can fill this later as well </p>
                <a href="#" className={styles.a}>Get Started
                    <Image src={Arrow} alt="arrow" />
                </a>
            </div>
        </section>
    );
}
export default MobileFormSection;