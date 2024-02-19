import Image from "next/image";
import styles from "./index.module.scss";
import StyleImg from "../../assests/images/paint-roller.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainCard from "../../assests/images/main.png";
import Card1 from "../../assests/images/card.png";
import Card2 from "../../assests/images/card2.png";
import Card3 from "../../assests/images/card4.png";
import MobileSlider from "../../assests/images/slider2.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import 'swiper/swiper-bundle.css';
import useWindowDimensions from "@/Hooks/useWindowDimensions";
import { useEffect, useRef, useState } from "react";
const SelectStyle = () => {
    const { width } = useWindowDimensions()
    const swiperParams = {
        spaceBetween: 2,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },

    };
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
            {/* //slider */}
            {
                width > 768 ?
                    <Swiper
                        {...swiperParams}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide className={styles.flex}>
                            <Image src={MainCard} className={styles.mainImage} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.flex}>
                            <Image src={Card1} className={styles.cardImg} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.flex}>
                            <Image src={Card2} className={styles.cardImg} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.flex} >
                            <Image src={Card3} className={styles.cardImg} alt="slider" />
                        </SwiperSlide>
                    </Swiper> :
                    <Image src={MobileSlider} className={styles.mobileImage} alt="slider" />
            }


            <div className={`${styles.style} ${inView && styles.animation}`} ref={animationRef}>
                <Image src={StyleImg} alt="SelectStyle" className={styles.image} />
                <heading className={styles.heading}>Select Your Style</heading>
                <subheading className={styles.subheading}>Match your card to your personality. Whether you like a minimal look or something that catches everyone’s eyes, we’ve got a style for you. You can update your style every year, for a small fee.</subheading>
            </div>
        </section>
    );
}
export default SelectStyle;