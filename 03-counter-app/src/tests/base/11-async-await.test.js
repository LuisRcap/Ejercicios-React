import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe de retornar el url de la imagen', async() => {
        const resp = await getImagen();
        // console.log(url);
        expect( resp ).toBe( 'No existe' );
    })
    

})
