import ClientsCard from './ClientsCard'
import styles from './Clients.module.css'
function Clients()
{
    return(
<div>
    
    <div className={styles.h1_landing_1}>Featured Clients</div>
 <div className={styles.row_card_1}>
         <ClientsCard/>
    </div>
    </div>
    );
}
export default Clients