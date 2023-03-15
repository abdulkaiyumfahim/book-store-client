// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:"AIzaSyAyeeUIW-XfsDuNVCA4ezhs7Nd86YKWK3Q",
//   authDomain:"book-store-30692.firebaseapp.com",
//   projectId:"book-store-30692",
//   storageBucket:"book-store-30692.appspot.com",
//   messagingSenderId:"935317187114",
//   appId:"1:935317187114:web:e6b24a309f69d79f73b153"
// };

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;