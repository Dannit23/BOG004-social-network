export default () => {
    const viewHome = `
    <figure class="text-center">
    <img class="image" src="https://i.imgur.com/p8blMIY.jpg" alt="collage">
    <img class="image" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <h2 class="text-center">Se un viajero, te ayudamos a  descubrir lugares y llear tu vida de aventuras.</h2>
    <button class="botons" type="submit" id="btn-google"><i class="fa-brands fa-google"></i>continuar con Google</button>
    <p>Correo electrónico</p>
    <input class="email" type="email" placeholder="Ingresa tu correo">
    <p>Contraseña</p>
    <input class="password" type="password" placeholder="Ingresa tu contraseña">
    <button class="botons" type="submit" id="sing-in">INGRESAR</button>
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button>
    </figure>
    `
    const divElem = document.createElement('div');
    divElem.classList.add('position');
    divElem.innerHTML = viewHome;
    
    return divElem;
}