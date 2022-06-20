import CollaborativeCard from "./CollaborativeCard";
import styles from './Experiences.module.css'
function Experiences()
{
    return(
<div>
    
    <div className={styles.h1_landing}>Collaborative Marketing Experiences</div>
    <br/>
    <br/>
    <br/>
    <div className={styles.row_card}>
         <CollaborativeCard/>
    </div>
    <div className={styles.work}>
    <button className={styles.work_btn}>MORE WORKS</button>
    </div>
</div>
    );
}
export default Experiences