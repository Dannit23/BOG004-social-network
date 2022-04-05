import { changeView } from '../view-controler/router.js';
export default () => {
    const viewWall = `
    <div id="signOff">
    <img  id="logoSmall" class="headerImage" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <button class="botons" type="submit" id="sign-off">CERRAR SESIÓN</button><br>
    </div>
    <p>En construcción...</p>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewWall;

    const signOff = divElem.querySelector('#signOff');
       signOff.addEventListener('click', (event) => {
       console.log(signOff);
       event.preventDefault();
       changeView("#/")
    });

    return divElem; 

}