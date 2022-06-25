import Head from "next/head";
import Link from "next/link";
import Navbar from "src/components/Navbar/Navbar";
import ServiceCard from "src/components/Service/ServiceCard";
import styles from '../src/components/css/services.module.css'
function Services()
{
    return(
        <div>
            <Head>
        <title>Anile Media | Services</title>
      </Head>
      <Navbar/>
      <main>
        <div className={styles.container}>
      <div className={styles.title}>Our Services</div>
            <div className={styles.description}>A brand is commonly thought of as a logo, a website, or a commercial; however, there are a number of complex elements that each embody the look, tone, and voice of an organization. This is why we strategize every step along the way and strive to call attention to each detail and facet that supports your brand as a whole.</div>
            <br/>
            <div className={styles.start_title}>ALREADY KNOW WHAT YOU NEED?</div>
            <div className={styles.button}>
            <Link href="/form">
            <button className={styles.button_active_1} >START A PROJECT</button>
            </Link>
            </div> 
            <div className={styles.row_card_1}>
               <ServiceCard/>
            </div>
            <div className={styles.start_title_1}>What are you waiting for?</div>
            <div className={styles.button}>
            <Link href="/form">
            <button className={styles.button_active_2} >LET'S START A PROJECT</button>
            </Link>
            </div> 
            </div>
      </main>
        </div>
    );
}
export default Services