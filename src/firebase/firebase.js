  // Import the functions you need from the SDKs you need
  import { initializeApp } from './firebaseImport.js';
  import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword } from './firebaseImport.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCGl_3YpOa_bYXYysOm7HoSJiNTfSTekzs",
    authDomain: "travesias-colombia.firebaseapp.com",
    projectId: "travesias-colombia",
    storageBucket: "travesias-colombia.appspot.com",
    messagingSenderId: "1034343285425",
    appId: "1:1034343285425:web:cd6b1cd2658ad1066f1890",
    measurementId: "G-RDPN969MHK"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  //Dentro de una funcion
  //Utilizamos los servicios de Firebase, tenemos todas las funciones para gestionar, crear, autenticar de nuestros usuarios
  
  export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
  };
  
  export const signGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    console.log (provider)
    return signInWithPopup(auth, provider)
  }; 
 
  export const existingUser = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
  };


  