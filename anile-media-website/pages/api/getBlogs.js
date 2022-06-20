import {collection} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,getDocs} from "firebase/firestore"
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

export const db = getFirestore(app);
import Blog from '../../src/utils/models/blogmodel';

export default async (req, res) => {
    try {
        const data=await getDocs(collection(db, 'blogs'))
        const blogsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const blog = new Blog(
                    doc.id,
                    doc.data().title,
                    doc.data().content,
                    doc.data().author,
                );
                blogsArray.push(blog);
            });
            res.send(blogsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
  }