import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un Héroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( (h) => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });
    
    test('Debe de retornar un undefine si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });

    // Debe retornar un arreglo con los héroes de DC
    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';

        const heroesDC = getHeroesByOwner( owner );
        
        const heroesDCData = heroes.filter( (h) => h.owner === owner );

        expect(heroesDC).toEqual(heroesDCData);
    })

    // Debe retornar un arreglo con los héroes de Marvel
    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner( owner );

        expect( heroesMarvel.length ).toBe( 2 )
    })
    
    // lenght = 2 // toBe

})
