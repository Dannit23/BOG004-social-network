//Aquí colocamos las importaciones de la página oficial de Firebase 
export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";


export {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";