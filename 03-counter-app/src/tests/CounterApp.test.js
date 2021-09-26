import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    
    });
    
    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value={100}/> );

        const contador = parseInt( wrapper.find('h2').text() );
        expect(contador).toBe(100);
        
    });
    
    test('Debe de incrementar contador con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        
        const contador = parseInt( wrapper.find('h2').text() );

        expect( contador ).toBe( 11 );

    })

    test('Debe de decrementar contador con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        
        const contador = parseInt( wrapper.find('h2').text() );

        expect( contador ).toBe( 9 );

    })
    

})
