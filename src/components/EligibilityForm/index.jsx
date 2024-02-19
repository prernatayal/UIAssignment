'use client'

import styles from "./index.module.scss";
import Image from "next/image";
import FormImg from "../../assests/images/form.png";
import useForm from "@/Hooks/useForm";
import { useEffect, useRef, useState } from "react";

const EligibilityForm = () => {

    const { formData, handleOnChange, handleSubmit } = useForm();
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
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formSection}>
                    <input type="number" required className={styles.input} name="phoneNumber" placeholder="Enter your phone number"
                        value={formData?.phoneNumber} onChange={(e) => handleOnChange(e)} />
                    <input type="text" required className={styles.input} name="panNumber" placeholder="Enter your PAN number"
                        value={formData?.panNumber} onChange={(e) => handleOnChange(e)} />
                    <input type="text" required className={styles.input} name="address" placeholder="Enter your Address"
                        value={formData?.address} onChange={(e) => handleOnChange(e)} />
                    <button type="submit" className={styles.button}>Submit</button>
                </div>
            </form>
            <div className={`${styles.textSection} ${inView && styles.animation}`} ref={animationRef}>
                <Image src={FormImg} alt="form" />
                <p className={styles.heading}>Fill Eligibility Form</p>
                <p className={styles.subheading}>Tell us about yourself, to find out if you’re eligible to apply.</p>
            </div>
        </section>
    );
}
export default EligibilityForm;