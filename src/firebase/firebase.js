
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
  //Utilizamos los servicios de Firebase, tenemos todas las funciones para gestionar, crear, autenticar de nuestros usuarios
  const auth = getAuth();

  /* Crear una cuenta con email y password, donde usamos la libreria de Firebase */
  export const register = (email, password, nombres, apellidos) => {
    //Creamos un usuario con email y contraseña
    createUserWithEmailAndPassword(auth, email, password)
    //Si todo sale bien tendremos un resultado positivo
      .then((userProfile) => {
        //Actualizar el nombre con el que el usuario digito
      userProfile.user.updateProfile({
      displayName: nombres,
      displayLastName: apellidos
    })

    //Firebase coloque un botón de continuiar, para que muestre el link y redireccione a nuestra pág
    const config = {
      url: 'http://localhost:3000/#/'
    } 

    //Buena práctica de seguridad: Enviarle un correo de verificación a su cuenta, para saber si en verdad es esa persona quien dice ser
    userProfile.sendEmailVerification(config).catch((error) => {
      console.error(error)
      Materialize.toast(error.message, 4000)
    })
    
    //No guarde la información en el Browser hasta que no haga click en el link que le llega al correo al usuario
    getAuth().signOut()

    //Mensaje de bienvenida
    Materialize.toast(
      `Bienvenid@ ${nombres, apellidos}, debes realizar el proceso de verificación`, 4000
    )

    //Aquí cerramos la ventana
    $('.modal').modal('close')
  })
  //Capturar si existe algún error
  .catch((error) => {
    console.error(error)
    //Se le muestra al usuario
    Materialize.toast(error.message, 4000)
    /* const errorCode = error.code;
    const errorMessage = error.message; */
    // ..
  });
}