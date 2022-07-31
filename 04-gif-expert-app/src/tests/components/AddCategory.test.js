import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    /* const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
       jest.clearAllMocks();
       wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe de mostrarse correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();

    }); */
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe('Saitama');
        //screen.debug();

    });
    
    /* test('No debe de postear la información con Submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategory y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );   //Se espera que setCategories sea una función
        expect( input.prop('value') ).toBe('');

    }); */
    

});
