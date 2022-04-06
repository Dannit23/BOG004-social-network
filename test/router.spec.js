import { changeView } from '../src/view-controler/router.js' 

jest.mock('../src/firebase/firebaseImport');

const templates = {
    home: `<p> Home </p>`,
    register: `<p> Register </p>`,
    wall: `<p> Wall </p>`
}
describe('ruteo', () => {
    it('debería retornar la ruta de cada componente', () => {
    expect(changeView('#/').toBe(templates.home)) //Falta aún hacer la validación de mi changeView
    })
    
})