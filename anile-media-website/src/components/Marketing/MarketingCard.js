import styles from './MarketingCard.module.css'
import MarketingData from '../../data/MarketingData'
function MarketingCard()
{
    return(
        MarketingData.map((data) => (
        <div className={styles.mar_card}>

        <div class={styles.head}>{data.heading}</div>
        <div class={styles.mar_text}>{data.description}</div>
        <div class={styles.more}><a href={data.more} > View More</a></div>

    </div>
        ))
    );
}
export default MarketingCard