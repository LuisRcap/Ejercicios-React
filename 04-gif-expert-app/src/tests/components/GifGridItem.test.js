import { render, screen } from '@testing-library/react';
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas de <GifGridItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe mostrar el componente correctamente', () => {
        const { container } = render( <GifGridItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test( 'Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifGridItem title={title} url={url} />);
        // screen.debug();
        /* expect( screen.getByRole('img').src ).toBe( url ); */

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test( 'Debe mostrar el titulo con el texto indicado', () => {
        render( <GifGridItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();
    });

    /* const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem
            title={title}
            url={url}
        /> );

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
       
        const img = wrapper.find('img');
        // console.log( img.prop('src') );

        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });
    
    test('Debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect( className.includes('animate__fadeIn') ).toBe( true );

    }); */
    
    
    
});
