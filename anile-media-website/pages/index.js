import Head from 'next/head'
import Navbar from 'src/components/Navbar/Navbar'
import Landing from 'src/components/Landing/Landing'
import Experiences from 'src/components/Collaborative/Experiences'
import * as React from 'react'
import Slider from 'src/components/Miscellaneous/Slider'
import Marketing from 'src/components/Marketing/Marketing'
import Clients from 'src/components/Client/Clients'
import Blogs from 'src/components/Blog/Blogs'
import Contact from 'src/components/Contact/Contact'
import Footer from 'src/components/Footer/Footer'
import VerticalTabs from 'src/components/VerticalTabs/VerticalTabs'
import Cookies from 'src/components/Landing/Cookies'


export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Anile Media</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>
      <Cookies/>
        <Landing />
        <Experiences />
        <Marketing />
        <Clients />
        <Blogs />
        <Slider />
        <VerticalTabs/>
        <Contact />
        <Footer />
      </main>
    </div >
  )
}
