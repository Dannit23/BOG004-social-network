import { changeView } from '../src/view-controler/router.js';

jest.mock('../src/firebase/firebaseImport.js');

describe('ruteo', () => {
    it('debería retornar la ruta de cada componente', () => {
        //aqui incluimos el id del container de html manualmente
        document.body.innerHTML = '<section id="container"></section>'
        const comentContainer = document.createElement('div');
        comentContainer.setAttribute('id', 'coment-container')
        document.getElementById('container').appendChild(comentContainer)
        changeView('#/')
    expect(window.location.hash).toBe("#/") 
    })
    
})
