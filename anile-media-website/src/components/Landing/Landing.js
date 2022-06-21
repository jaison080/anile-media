import styles from './Landing.module.css'
function Landing() {
    return (
        <div>
            <div className={styles.h1_landing}>Where Future-Proof Strategy Meets Digital Innovation</div>
            <div className={styles.p_landing}>Through unified branding , human-centered UX/UI design , future-forward web development , and strategic digital marketing , Big Drop works with the world’s most ambitious brands in creating innovative digital products designed to fuel innovation.</div>
            <div className={styles.logo}><i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></div>
        </div >
    );
}
export default Landing