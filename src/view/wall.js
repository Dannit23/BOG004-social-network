import { changeView } from '../view-controler/router.js';
import { savePost, collection } from '../firebase/firebase.js';

export default () => {
    const viewWall = `
    <div>
    <img  id="logoSmall" class="headerImage" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    </div>
    <div id="signOff">
    <img  id="userlogo" class="userImage" src="https://i.imgur.com/2dpt47g.png" alt="userlogo">
    /*falta agregar el nombre o el correo del usuario que se registra*/
    <button class="botons" type="submit" id="sign-off">Cerrar Sesión</button><br>
    </div>
    <form id="text">
    <div id="post">
    <textarea id="comentText" placeholder="¡Comenta!"></textarea>
    <button class="botons" type="submit" id="postText">Publicar</button>
    </div>
    </form>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewWall;
   
    //Se crea evento del boton cerrar sesión
    const signOff = divElem.querySelector('#signOff');
       signOff.addEventListener('click', (event) => {
       console.log(signOff);
       event.preventDefault();
       changeView("#/")
    });
    
    const text = divElem.querySelector('#text')
    // se crea un evento para refrecar la página
    text.addEventListener('submit', (e) => {
    //aquí cancelamos el evento de refrescar la página
        e.preventDefault()
        const coment = text['comentText']
        savePost(coment.value);
    });

    return divElem; 

}

   //Se crea un evento para ejecutar cuando la aplicacion recargue con firestore
   window. addEventListener('DOMContentLoaded', () => {
    //console.log("works")
    });



