import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-IjGraUgz-4SCIX9njd71JYTKtyl0D80",
  authDomain: "react-netflix-clone-4c25c.firebaseapp.com",
  projectId: "react-netflix-clone-4c25c",
  storageBucket: "react-netflix-clone-4c25c.appspot.com",
  messagingSenderId: "715846742030",
  appId: "1:715846742030:web:c04144dfb8109d289e4c5f",
  measurementId: "G-BSY98J94KC"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app)