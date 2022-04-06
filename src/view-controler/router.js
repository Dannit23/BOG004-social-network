import { components } from '../view/index.js'


const changeView = (route) => {
    window.location.hash = route;
    const container = document.getElementById('container')
    container.innerHTML = '';
    switch (route) {
        case '': { return container.appendChild(components.home()) }
        case '#/': { return container.appendChild(components.home()) }
        case '#/register': { return container.appendChild(components.register()) }    
        case '#/wall': { return container.appendChild(components.wall()) }
        default:
            return container.appendChild(components.different())
    }
    console.log(route)
}

export { changeView }