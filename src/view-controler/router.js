import { components } from '../view/index.js'


const changeView = (route) => {
    window.location.hash = route;
    const container = document.getElementById('container')
    const comentContainer = document.getElementById('coment-container')

    container.innerHTML = '';
    switch (route) {
        
        case '': {  
           comentContainer.style.display = 'none'
           return container.appendChild(components.home()) 
        }
        case '#/': { 
            comentContainer.style.display = 'none'
            return container.appendChild(components.home()) 
        }
        case '#/register': { 
            comentContainer.style.display = 'none'
            return container.appendChild(components.register()) 
        }    
        case '#/wall': {  
            comentContainer.style.display = 'block'
            return container.appendChild(components.wall()) }
        default:
            comentContainer.style.display = 'none'
            return container.appendChild(components.different())
    }
    console.log(route)
}

export { changeView }