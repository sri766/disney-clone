import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import {GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBB-0382qXBu2ZId3iT_x4U-x3GnTVqtWs",
  authDomain: "todo-3ce31.firebaseapp.com",
  databaseURL: "https://todo-3ce31-default-rtdb.firebaseio.com",
  projectId: "todo-3ce31",
  storageBucket: "todo-3ce31.appspot.com",
  messagingSenderId: "339170176267",
  appId: "1:339170176267:web:bc6472ce61fc794928460e",
  measurementId: "G-XF9VBK0SFY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;