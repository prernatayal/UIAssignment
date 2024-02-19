import Image from "next/image";
import BannerImg from "../../assests/images/gif.png";
import styles from "./banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.main}>
            <div>
                <p className={styles.heading}>Build a Credit Card That is Definitely Yours</p>
                <p className={styles.subheading}>With the OneSync Credit Card you can customise your card the way you want</p>
                <button className={styles.button}>Get Started</button>
            </div>
            <div>
                <Image src={BannerImg} className={styles.image} />
            </div>
        </section>
    );
}
export default Banner;