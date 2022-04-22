  // Import the functions you need from the SDKs you need
  import { initializeApp } from './firebaseImport.js';
  import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword,
    getFirestore,
    collection,
    addDoc,
    onAuthStateChanged,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
    updateDoc,
    arrayRemove,
    arrayUnion } from './firebaseImport.js';
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
  export const auth = getAuth();
  const db = getFirestore()
  

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

  //Se exporta una funcion para guardar la información en firestore
  export const savePost = (comentText) => {
    console.log(comentText)
    //para llamar la base de datos con su nombre(data)
    addDoc(collection(db, 'publications'), {
      "comentText": comentText, 
      "likes": [],
      "likesCounter": 0,
      "author": window.user.email}) 
  };

  export const getComents = () => getDocs(collection(db, 'publications')) 

  //Evento de cuando se obtengan comentarios
  export const onGetComents = () => console.log('onGetComents')

  //Esta funcion es propia de firestore para recargar automaticamente los comentarios 
  export {
    onSnapshot,
    collection,
    db
  }

  export const deleteComent = (id) => deleteDoc(doc(db, 'publications', id));

  //Se crea función para obtener un único comentario
  export const getComent = (id) => getDoc(doc(db, 'publications', id));

  //Se crea función para poder actualizar los comentarios
  //newFields = Hace referencia a actualizar nuestra base de datos en Firestore
  export const updateComent = (id, newFields) => updateDoc(doc(db, 'publications', id), newFields)

  export const updateLikeBtn = async (id, like) => {
    const getPost = await getComent(id);
    const uLike = getPost.data().likes;
    const likesCount = getPost.data().likesCounter;

    if(uLike.includes(like)) {
      await updateComent(id, {
        "likes": arrayRemove(like),
        "likesCounter": likesCount - 1,
      });
    } else {
      await updateComent(id, {
        "likes": arrayUnion(like),
        "likesCounter": likesCount + 1,
      });
    }

  }

  /* //se exporta una funcion para guardar el nombre y el apellido del usuario como perfil del post
  export const saveUserName = (name, lastName, uid) => {
    return addDoc(collection(db, 'datosIdentificacionUsuario'), {name, lastName, uid})
    // const name = divElem.querySelector('#name').value;
    // const lastName = divElem.querySelector('#lastName').value; 
  }; */

  export const profile = (divElem) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userName = divElem.querySelector("#userName")
        userName.innerHTML = user.email
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        window.user = user;
      } else {
        // User is signed out
        // ...
      }
    });

  }

 
  
  
 




  