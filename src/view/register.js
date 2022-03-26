export default () => {
    const viewRegister = `
    <figure class="text-center">
    <img class="image" src="https://i.imgur.com/Ij0bvTJ.png" alt="logo">
    <p>Registrate</p>
    <p>Nombre</p>
    <input class="text" type="text" id="name" placeholder="Ingresa tu nombre">
    <p>Apellido</p>
    <input class="text" type="text" id="lastName" placeholder="Ingresa tu apellido">
    <p>Correo electrónico</p>
    <input class="email" type="email" placeholder="Ingresa tu correo">
    <p>Nueva contraseña</p>
    <input class="password" type="password" placeholder="Ingresa tu contraseña">
    <button class="botons" type="submit" id="create-account">CREAR CUENTA</button>
    </figure>
    `
    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegister;
    
    return divElem;
}