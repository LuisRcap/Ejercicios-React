import { render, screen } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de mostrar el componente correctamente', () => {
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const { container } = render(<GifExpertApp defaultCategories={ categories } />);

        expect( container.innerHTML ).toContain('One Punch');
        expect( container.innerHTML ).toContain('Dragon Ball');
        

    });
    
    
});