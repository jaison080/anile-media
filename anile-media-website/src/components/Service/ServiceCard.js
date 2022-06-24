import styles from './ServiceCard.module.css'
import ServiceData from '../../data/ServiceData'
function ServiceCard()
{
    return(
        ServiceData.map((data) => (
        <div className={styles.mar_card}>
        <div class={styles.head}>{data.heading}</div>
        <div class={styles.mar_text}>{data.description}</div>
        <div class={styles.more}><a href={data.more} > View More</a></div>

    </div>
        ))
    );
}
export default ServiceCard