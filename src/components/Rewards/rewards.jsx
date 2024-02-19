'use client'

import Image from "next/image";
import styles from "./rewards.module.scss";
import RewardsImg from "../../assests/images/networking.png";
import SliderImg from "../../assests/images/slider.png";
import { useEffect, useRef, useState } from "react";

const Rewards = () => {


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
      <div className={`${styles.rewards} ${inView && styles.animation}`} ref={animationRef}>
        <Image src={RewardsImg} alt="rewards" className={styles.image} />
        <heading className={styles.heading}>Choose Your Rewards</heading>
        <subheading className={styles.subheading}>Match your card to your lifestyle. We’ve got benefits from across brands & categories for you to choose from. Each benefit has an attached fee. Just add the ones you like to your card.</subheading>
      </div>
      <div className={styles.slider}>
        <Image src={SliderImg} alt="slider" className={styles.sliderImg} />
      </div>
    </section>
  );
}
export default Rewards;