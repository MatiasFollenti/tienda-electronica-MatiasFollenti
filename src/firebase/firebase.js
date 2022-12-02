import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3FBJgg9kv5Ama-f0LTVZITVvVr8jQATQ",
  authDomain: "accesorios-manzanita.firebaseapp.com",
  projectId: "accesorios-manzanita",
  storageBucket: "accesorios-manzanita.appspot.com",
  messagingSenderId: "986109178313",
  appId: "1:986109178313:web:303cbad85b81fa1ba7f818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;