export default () => {
    const viewHome = `
    <img class="headerImage" src="https://i.imgur.com/p8blMIY.jpg" alt="collage">
    <img class="headerImage" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <h2 class="text-welcome">Se un viajero, te ayudamos a  descubrir lugares y llenar tu vida de aventuras.</h2>
    <button type="submit" id="btn-google"><img class="logoGoogle" src="https://i.imgur.com/bD3SqPX.png">continuar con Google</button>
    <p class="text">Correo electrónico</p>
    <input class="email" type="email" placeholder="Ingresa tu correo">
    <p class="text">Contraseña</p>
    <input class="password" type="password" placeholder="Ingresa tu contraseña"><br> 
    <button class="botons" type="submit" id="sing-in">INGRESAR</button><br> 
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button
    `
    const divElem = document.createElement('div');
    divElem.classList.add('position');
    divElem.innerHTML = viewHome;
    
    return divElem;
}