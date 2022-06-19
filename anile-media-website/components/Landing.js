import styles from './Landing.module.css'
function Landing() {
    return (
        <div>
            <h4 className={styles.h4}>
                <div className={styles.c1}><div className={styles.type}>Where Future-Proof</div></div>
                <br />
                <div className={styles.c2}><div className={styles.type2}>Strategy Meets Digital</div></div>
                <br />
                <div className={styles.c3}><div className={styles.type3}>Innovation</div></div>
            </h4 >
            <div className={styles.p_landing}>Through unified branding , human-centered UX/UI design , future- <br />forward web development , and strategic digital marketing , Big Drop<br /> works with the world’s most ambitious brands in creating innovative<br /> digital products designed to fuel innovation.</div>
            <div className={styles.logo}><i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></div>
        </div >
    );
}
export default Landing