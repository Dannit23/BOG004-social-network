import { changeView } from '../view-controler/router.js';
import { savePost, 
    profile, 
    getComents, 
    onSnapshot, 
    collection, 
    db, 
    deleteComent, 
    getComent, 
    updateComent, 
    updateLikeBtn,
    auth } from '../firebase/firebase.js';
import { onAuthStateChanged, getAuth } from '../firebase/firebaseImport.js';
/* import { async } from 'regenerator-runtime'; */

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
    //    console.log(signOff);
       event.preventDefault();
       changeView("#/")
    });
    
    const text = divElem.querySelector('#text')
    // se crea un evento para refrecar la página
    text.addEventListener('submit', (e) => {
    //aquí cancelamos el evento de refrescar la página
        e.preventDefault()
        const coment = text['comentText']
        // savePost(coment.value);
        if (!editStatus) {
            savePost(comentText.value);
        } else {
            updateComent(id, {
                comentText: comentText.value,
                coment: comentText.value
            });

            editStatus = false;
        }
                  
        //Resetea el espacio del post
        text.reset();
    });

    profile(divElem); 
    
    return divElem; 

};
   
   //se crea esta variable para mostrar los datos en una interfaz para que sea mas simple de ver
   const comentContainer = document.getElementById('coment-container')

   //Se crea una variable para actualizar los datos
   let editStatus = false;
   let id = '';

   const subscribe = async () => {
    //console.log("works")
   // publications es el nombre de nuestra colección
   onSnapshot(collection(db, 'publications'), (querySnapshot) => {
       console.log('QuerySnapShot: ', querySnapshot);
       let paintPost = '';
    //    console.log(window.user)
       if (window.user == undefined) {
           return
       }
       querySnapshot.forEach((doc) => {
           const post = doc.data();
           console.log('post: ', post); 
           paintPost += `
           <div class="postPublications">
           <p>${post.author}</p>
           <p>${post.comentText}</p>
           <p>${post.likes.length}</p>
           <button class="btn-delete" data-id="${doc.id}">Eliminar</button>
           <button class="btn-edit" data-id="${doc.id}">Editar</button>
           <button class="btn-like" data-id="${doc.id}">Me gusta</button>
           </div>
           `;
       });
       
       //Se añade propiedad de HTM data-id, para guardar datos dentro del botón, con un 
       //valor del id de cada comentario
       comentContainer.innerHTML = paintPost;

       //Creamos una lista de botones de eliminar
       const btnsDelete = comentContainer.querySelectorAll('.btn-delete')
       btnsDelete.forEach(btn => {
           btn.addEventListener('click', ({target: { dataset }}) => {
               deleteComent(dataset.id)
           })
       })

       //Creamos una lista de botones de editar
       const btnsEdit = comentContainer.querySelectorAll('.btn-edit')
       btnsEdit.forEach((btn) => {
           btn.addEventListener('click', async (e) => {
            const doc = await getComent(e.target.dataset.id)
            const note = doc.data()

            text['comentText'].value = note.comentText

            editStatus = true;
            id = doc.id;
            text['postText'].innerText = 'Update'
           })
       })

       const like = comentContainer.querySelectorAll('.btn-like')
       like.forEach((btn) => {
           btn.addEventListener('click', (e) => {
               const userId = auth.currentUser.uid;
               updateLikeBtn(e.target.value, userId);
           });
       });

    });

}
   //Se crea un evento para ejecutar cuando la aplicacion recargue con firestore
window.addEventListener('DOMContentLoaded', subscribe); 
onAuthStateChanged(getAuth(), subscribe);


