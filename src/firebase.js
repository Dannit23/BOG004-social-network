
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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
  const app = initializeApp(firebaseConfig);

  //Dentro de una funcion
  const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });