import MarketingCard from "./MarketingCard";
import styles from './Marketing.module.css'
function Marketing() {
    return (
        <div className={styles.marketing}>

            <div className={styles.h1_landing}>Digital Marketing Services That<br />Surpass The Competition Experiences</div>
            <div className={styles.row_card_1}>
               <MarketingCard/>
            </div>
        </div >
    );
}
export default Marketing