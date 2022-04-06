import { changeView } from '../src/view-controler/router.js';

jest.mock('../src/firebase/firebaseImport');

describe('ruteo', () => {
    it('debería retornar la ruta de cada componente', () => {
        //aqui incluimos el id del container de html manualmente
        document.body.innerHTML = '<section id="container"></section>'
        changeView('#/')
    expect(window.location.hash).toBe("#/") 
    })
    
})
