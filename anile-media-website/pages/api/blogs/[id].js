import {collection} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,addDoc,getDoc,doc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCcgpSkiQF6EQeyQwwBdvxyaY7qF6jpKo",
  authDomain: "anile-media.firebaseapp.com",
  projectId: "anile-media",
  storageBucket: "anile-media.appspot.com",
  messagingSenderId: "962990300796",
  appId: "1:962990300796:web:08dd22da2f2d9d3398b3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === 'PUT') {
        const data = req.body;
        const blog =  await db.collection('blogs').doc(id);
        await blog.update(data);
        res.send('Blog record updated successfuly');
    } else if (req.method === 'GET') {
        const data=await getDoc(doc(db, 'blogs', id))
        //console.log(blogs)
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            res.send(data.data());
        }
    } else if (req.method === 'DELETE') {
        await db.collection('blogs').doc(id).delete();
        res.send('Record deleted successfuly');
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.message);
  }
}