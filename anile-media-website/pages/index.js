import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useRouter } from 'next/router'

export default function Home() {
  const Router=useRouter();
  function formPage(){
    Router.push('/form')
  }
  function createPage(){
    Router.push('/create')
  }
  function blogsPage(){
    Router.push('/blogs')
  }
  return (
    <div className='container'>
      <Head>
        <title>Anile Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container'>
        <div className='title'>ANILE MEDIA</div>
        <button className='button_active' onClick={formPage}>START A PROJECT</button>
        <br/>
        <br/>
        <button className='button_active' onClick={createPage}>CREATE BLOGS</button>
        <br/>
        <br/>
        <button className='button_active' onClick={blogsPage}>VIEW BLOGS</button>
        </div>
</main>
      </div>
  )
}
