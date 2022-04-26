import { gmail, signIn } from '../firebase/firebase-controller.js';
import { changeView } from '../view-controler/router.js';
export default () => {
    const viewHome = `
    <div id="home">
    <form id="registerGoogle">
    <img class="headerImage" src="https://i.imgur.com/7qQ9PFZ.jpg" alt="collage">
    <img class="headerImage2" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <h2 class="text-welcome">Se un viajero, te ayudamos a  descubrir lugares y llenar tu vida de aventuras.</h2>
    <button type="submit" id="btn-google"><img class="logoGoogle" src="https://i.imgur.com/bD3SqPX.png">continuar con Google</button>
    <div id="notificationG"> </div>
    </form>
    <form id="login">
    <p class="text">Correo electrónico</p>
    <input class="email" id="email" type="email" placeholder="Ingresa tu correo">
    <p class="text">Contraseña</p>
    <input class="password" id="password" type="password" placeholder="Ingresa tu contraseña"><br> 
    <button class="botons" type="submit" id="sing-in">INGRESAR</button><br> 
    <div id="notificationE"> </div>
    </form>
    <form id="createAccount">
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button>
    </form>
    </div>
    `;
    const divElem = document.createElement('div');
    divElem.classList.add('position');
    divElem.innerHTML = viewHome;

    //Evento del boton de iniciar con google
    const registerGoogle = divElem.querySelector('#registerGoogle');
        registerGoogle.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("submit");
        gmail()             
      });       
  
   //Evento del boton de crear cuenta
   const createAccount = divElem.querySelector('#createAccount');
       createAccount.addEventListener('submit', (event) => {
       console.log(createAccount);
       event.preventDefault();
       changeView("#/register")
    }); 
    //Evento del boton de ingresar 
    const loginUser = divElem.querySelector('#login');
    loginUser.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = divElem.querySelector('#email').value;
        const password = divElem.querySelector('#password').value;
        signIn(email, password).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            const notificationE = divElem.querySelector('#notificationE');
            console.log(notificationE);
            switch (errorCode) {
              case 'auth/invalid-email':
                notificationE.innerText = '⛔ ¡Correo Invalido!';
                break;
              case 'auth/wrong-password':
                notificationE.innerText = '⛔ ¡Contraseña incorrecta!';
                break;
              case 'auth/user-not-found':
                notificationE.innerText = '⛔ ¡Usuario no encontrado!';

              default:
                break;
            }
             
        });
        
    });

    return divElem;
};


