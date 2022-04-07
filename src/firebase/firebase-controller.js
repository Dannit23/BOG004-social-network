import { changeView } from "../view-controler/router.js";
import { createUser, signGoogle, existingUser, app } from "./firebase.js";
/* Crear una cuenta con email y password, donde usamos la libreria de Firebase */
export const register = (email, password, name, lastName) => {
    //Creamos un usuario con email y contraseña
    console.log(email, password);
    return createUser(email, password)
    //Si todo sale bien tendremos un resultado positivo
    .then(() => {
      //redirecciona al muro
      window.location.hash = '#/wall';
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const notification = divElem.querySelector('#notification');
        console.log(notification);
        switch (errorCode) {
          case 'auth/invalid-email':
            notification.innerText = '¡Correo Invalido!';
            break;
          case 'auth/email-already-in-use':
            notification.innerText = '¡Este correo ya está registrado!';
            break;
          case 'auth/weak-password':
            notification.innerText = '¡La contraseña debe tener mínimo 6 carácteres!';
            break;
          default:
            break;
        }
         
    });
};
/*Logueo con cuenta google*/
export const gmail = () => {
 //implementamos el logueo con nuevo proveedor de google
   return signGoogle()
    .then(() => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
      changeView('#/wall')
    })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // });
};

export const signIn = (email, password) => {
  //Inicia sesión usuario con email y contraseña
  console.log(email, password);
  return existingUser(email, password)
  //Si todo sale bien tendremos un resultado positivo
  .then(() => {
    // Signed in
    changeView('#/wall')
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 
      console.log(error.message) 
  });
};



