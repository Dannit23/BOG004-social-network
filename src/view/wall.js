import { changeView } from '../view-controler/router.js';
import { savePost, profile, getComent, onSnapshot, collection, db } from '../firebase/firebase.js';

export default () => {
    const viewWall = `
    <div id="signOff">
    <img  id="logoSmall" class="headerImage" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <button id="sign-off" >
    <img src="https://i.imgur.com/khsMnBi.png" alt="Sign off">
    </button>
    </div>
    <div id="profile">
    <img  id="userlogo" class="userImage" src="https://i.imgur.com/2dpt47g.png" alt="userlogo">
    <div id="userName"></div>
    </div>
    <form id="text">
    <div id="post">
    <textarea id="comentText" rows="5" cols="40" placeholder="¡Comenta!"></textarea>
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
        //Resetea el espacio del post
        text.reset();
    });

    profile(divElem); 
    
    return divElem; 

};
   
   //se crea esta variable para mostrar los datos en una interfaz para que sea mas simple de ver
   const comentContainer = document.getElementById('coment-container')

   //Se crea un evento para ejecutar cuando la aplicacion recargue con firestore
window.addEventListener('DOMContentLoaded', async () => {
     //console.log("works")
    onSnapshot(collection(db, 'comentText'), (querySnapshot) => {

        let paintPost = '';
            
        querySnapshot.forEach((doc) => {
            const post = doc.data();

            paintPost += `
            <div class="postPublications">
            <p>${post.comentText}</p>
            </div>
            `;
        });
        
        comentContainer.innerHTML = paintPost;

    });

}); 
            

