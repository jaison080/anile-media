import Head from 'next/head'
import Navbar from '../components/Navbar'
import Landing from 'components/Landing'
import Experiences from 'components/Experiences'


import Marketing from 'components/Marketing'
import Clients from 'components/Clients'
import Blogs from 'components/Blogs'
import Contact from 'components/Contact'
import Footer from 'components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Anile Media</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=1024"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>
        <Landing />
        <Experiences />
        <Marketing />
        <Clients />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </div >
  )
}
