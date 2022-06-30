import Head from "next/head";
import Navbar from "src/components/Navbar/Navbar";
import TeamCard from "src/components/Team/TeamCard";
import styles from '../src/components/css/team.module.css'
function Team()
{
    return(
        <div>
            <Head>
        <title>Anile Media | Team</title>
      </Head>
      <Navbar/>
      <main>
      <div className={styles.container}>
      <div className={styles.title}>Our Team</div>
      <div className={styles.row_card}>
         <TeamCard/>
    </div>
      </div>
      </main>
      </div>
    );
}
export default Team