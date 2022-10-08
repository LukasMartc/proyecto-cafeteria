import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAptfwA1FtS4RSZAWE0kgz6RbybrS0Jz7Y",
  authDomain: "fir-restaurante-a607e.firebaseapp.com",
  projectId: "fir-restaurante-a607e",
  storageBucket: "fir-restaurante-a607e.appspot.com",
  messagingSenderId: "337720413341",
  appId: "1:337720413341:web:22a2d847e62c8f11549874"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

