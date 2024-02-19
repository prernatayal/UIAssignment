'use client'

import styles from "./faq.module.scss";
import Image from "next/image";
import arrowDown from "../../assests/images/arrow-down.png";
import arrowUp from "../../assests/images/arrow-up.png";
import { useEffect, useRef, useState } from "react";

const Faqs = () => {

    const [isOpen, setIsOpen] = useState(0);

    const faqsData = [
        {
            title: "Who’s eligible for the Card?",
            description: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low."
        },
        {
            title: "Is my location serviceable?",
            description: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low."
        },
        {
            title: "What if I don’t want to pay at all?",
            description: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low."
        },
        {
            title: "What happens after I’ve build my card?",
            description: "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low."
        }
    ];

    const handleToggle = (key) => {
        setIsOpen(isOpen === key ? -1 : key);
    }
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
        <section className={styles.main}>
            <heading className={`${styles.heading} ${inView && styles.animation}`} ref={animationRef}>FAQs</heading>
            <div className={styles.faqs}>
                {faqsData?.map((faq, key) => {
                    return (
                        <div key={key} className={styles.faqSection} onClick={() => handleToggle(key)}>
                            <div className={styles.titleSection}>
                                <p className={styles.title}>{faq?.title}</p>
                                {isOpen === key ?
                                    <Image src={arrowUp} alt="arrow-up" className={styles.arrow} />
                                    :
                                    <Image src={arrowDown} alt="arrow-down" className={styles.arrow} />
                                }
                            </div>
                            {isOpen === key ?
                                <p className={styles.description}>{faq?.description}</p>
                                : ''
                            }
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default Faqs;