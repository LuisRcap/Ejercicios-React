import { render } from '@testing-library/react';
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas de <GifGridItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe mostrar el componente correctamente', () => {
        const { container } = render( <GifGridItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
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
