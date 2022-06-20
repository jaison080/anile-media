import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Navbar from 'src/components/Navbar/Navbar';
export default function Post() {
const [post, setPost] = useState('');
const router = useRouter();
const {id} = router.query; 


async function getPost(){
       
       const ref =  await axios.get(`/api/blogs/${id}`);
        setPost(ref.data);
        console.log(ref.data);
}

useEffect(()=>{
  if(id!==undefined){
    getPost();
  }
},[id]); 

return (
  <div>
      <Head>
        <title>Anile Media | Posts</title>
      </Head>
     <Navbar/>
      <main>
  <div className='postspage'>
    
    <Container maxWidth="lg" fixed>
    <h1>{post.title}</h1>
    <h2>{post.author}</h2>
    <div dangerouslySetInnerHTML={{__html:post.content}} />
    </Container>
  </div>
  </main>
  </div>
)
}