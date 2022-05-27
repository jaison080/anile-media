import Head from 'next/head'
import Navbar from '../components/Navbar'
import Landing from 'components/Landing'
import Experiences from 'components/Experiences'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Anile Media</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
       <Navbar/>
   
      <main>
         <Landing/>
         <Experiences/>
</main>
</div>
  )
}
