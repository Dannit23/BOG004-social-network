import { register, gmail, signIn } from '../src/firebase/firebase-controller.js';

jest.mock('../src/firebase/firebaseImport');

//testeamos la funcion de register, para verificar que redirecciona a la vista del muro
describe('register', () => {
  it('debería retornar el redireccionamiento a la vista del muro', () => {
    register("email", "password").then(()=>{
      expect(window.location.hash).toBe("#/wall") 
    }) 
   
  })
})

//testeamos la funcion de gmail, para verificar que redirecciona a la vista del muro
  describe('gmail', () => {
    it('debería retornar el redireccionamiento a la vista del muro', () => {
      document.body.innerHTML = '<section id="container"></section>'
      gmail().then(()=>{
        expect(window.location.hash).toBe("#/wall") 
      }) 
     
    })
  })  

  //testeamos la funcion de gmail, para verificar que redirecciona a la vista del muro
  describe('signIn', () => {
    it('debería retornar el redireccionamiento a la vista del muro', () => {
        signIn("email", "password").then(()=>{
        expect(window.location.hash).toBe("#/wall") 
      }) 
     
    })
  })
  