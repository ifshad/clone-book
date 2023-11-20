// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8hiwZc1xY825EAg_kNA50mxQOCw8ozo",
  authDomain: "clone-book.firebaseapp.com",
  projectId: "clone-book",
  storageBucket: "clone-book.appspot.com",
  messagingSenderId: "319416471446",
  appId: "1:319416471446:web:95f8eeba615b987ec157b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;