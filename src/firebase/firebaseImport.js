//Aquí colocamos las importaciones de la página oficial de Firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";


import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


export {
    initializeApp,
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword
} 