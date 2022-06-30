import styles from './TeamCard.module.css'
import TeamData from '../../data/TeamData'
function TeamCard()
{
  return(
  TeamData.map((data) => (
<div className={styles.card}>
  <img className={styles.card_img} src={data.image}/>
    <div class={styles.head}>{data.name}</div>
    <div class={styles.text}>{data.description}</div>
</div>
  
  )
));
  
 
}
export default TeamCard