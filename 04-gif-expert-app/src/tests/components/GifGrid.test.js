import { render, screen } from '@testing-library/react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const value = 'Star Wars';

    test('Debe mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            isLoading: true
        });
        
        render( <GifGrid category={value} /> );
        expect( screen.getByText(value) );
    });

    test( 'Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Star Wars',
                url: 'https://localhost/star-wars.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            isLoading: false
        });

        render( <GifGrid category={value} /> );
        expect( screen.getAllByRole('img').length ).toBe(gifs.length);

        screen.debug();
    })
    
});
