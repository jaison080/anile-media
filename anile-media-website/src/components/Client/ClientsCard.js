import styles from './ClientsCard.module.css'
import ClientsData from '../../data/ClientsData'
function ClientsCard()
{
    return(
      ClientsData.map((data) => (
        <div className={styles.card_img}>
          <img className={styles.card_img} src={data.image}/>
  <div class={styles.overlay}>
    <div class={styles.text_1}>{data.description}</div>
  </div>
  
</div>
      )));
}
export default ClientsCard