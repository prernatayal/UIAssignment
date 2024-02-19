import styles from './header.module.scss'

const MenuItems = () => {
    return (
        <section className={styles.menuSection}>
            <div className={styles.section}>
                <p className={styles.p}>Track Application</p>
                <p className={styles.p}>Manage My Card</p>
                <p className={styles.p}>FAQs</p>
            </div>
        </section>
    );
}
export default MenuItems;