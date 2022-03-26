export default () => {
    const viewRegister = `
    <figure class="text-center">
    <img class="imageLogo" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <p id="text">Registrate</p>
    <p class="text">Nombre</p>
    <input class="text" type="text" id="name" placeholder="Ingresa tu nombre">
    <p class="text">Apellido</p>
    <input class="text" type="text" id="lastName" placeholder="Ingresa tu apellido">
    <p class="text">Correo electrónico</p>
    <input class="email" type="email" placeholder="Ingresa tu correo">
    <p class="text">Nueva contraseña</p>
    <input class="password" type="password" placeholder="Ingresa tu contraseña">
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button>
    </figure>
    `
    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegister;
    
    return divElem;
}