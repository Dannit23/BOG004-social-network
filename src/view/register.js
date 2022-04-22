import  { register }  from '../firebase/firebase-controller.js'

export default () => {
    const viewRegister = `
    <div>
    <a href="#/register"><button class="botonsHome">registro</button></a>
    </div>
    <form id="registerUser">
    <img class="headerImage" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <p id="textRegister">Registrate</p>
    <p class="text">Nombre</p>
    <input class="textP" type="text" id="name" placeholder="Ingresa tu nombre">
    <p class="text">Apellido</p>
    <input class="textP" type="text" id="lastName" placeholder="Ingresa tu apellido">
    <p class="text">Correo electrónico</p>
    <input class="email" id="email" type="email" placeholder="Ingresa tu correo">
    <div id="notification"> </div>
    <p class="text">Nueva contraseña</p>
    <input class="password" type="password" id="password" placeholder="Ingresa tu contraseña">
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button>
    </form>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegister;

    const registerUser = divElem.querySelector('#registerUser');
    registerUser.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = divElem.querySelector("#name").value;
        const lastName = divElem.querySelector("#lastName").value;
        const email = divElem.querySelector('#email').value;
        const password = divElem.querySelector('#password').value;
        /* registerUser.reset(); */
        register(email, password, name, lastName).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            const notification = divElem.querySelector('#notification');
            console.log(notification);
            switch (errorCode) {
              case 'auth/invalid-email':
                notification.innerText = '⛔ ¡Correo Invalido!';
                break;
              case 'auth/email-already-in-use':
                notification.innerText = '🚫 ¡Este correo ya está registrado!';
                break;
              case 'auth/weak-password':
                notification.innerText = '⛔ ¡La contraseña debe tener mínimo 6 carácteres!';
                break;
              default:
                break;
            }
             
        });
    });
    return divElem; 
};
    
  
    