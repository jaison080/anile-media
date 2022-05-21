import {collection} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,addDoc} from "firebase/firestore"
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
export default async (req, res) => {
    try {
        const data = req.body;
        //const docRef = collection(db,'form').doc();
        //await docRef.set(data);
        const docRef = await addDoc(collection(db, "blogs"),req.body);
        res.send(docRef.id);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}