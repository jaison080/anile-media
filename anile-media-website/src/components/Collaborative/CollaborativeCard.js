import styles from './CollaborativeCard.module.css'
import CollaborativeData from '../../data/CollaborativeData'
function CollaborativeCard()
{
  return(
  CollaborativeData.map((data) => (
<div className={styles.card}>
  <img className={styles.card} src={data.image}/>
  <div class={styles.overlay}>
    <div class={styles.text}>{data.description}</div>
  </div>
</div>
  
  )
));
  
 
}
export default CollaborativeCard