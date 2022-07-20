import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Luis!', () => {
        const nombre = 'Luis';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');
    });
    
    // getSaludo debe de retornar "Hola Carlos!" si no hay argumento en nombre
    test('getSaludo debe de retornar "Hola Goku!" si no hay argumento en nombre', () => {
        expect( getSaludo() ).toBe('Hola Goku!');
    });
    

});