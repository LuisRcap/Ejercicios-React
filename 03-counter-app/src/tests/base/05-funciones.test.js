import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe( 'Pruebas en 05-funciones', () => {
    test('getUser Debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    test('getUsuarioActivo debe regresar un objeto ', () => {
        const nombre = 'Tanjiro';

        const userActiveTest = {
            uid: 'ABC567',
            username: nombre
        };

        const userActive = getUsuarioActivo(nombre);

        expect( userActive ).toEqual(userActiveTest);

    })
    
    
})