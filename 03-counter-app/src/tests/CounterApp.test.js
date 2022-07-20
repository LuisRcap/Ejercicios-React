import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );        // Esto para que funcione el intelisense

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
    
    test('Debe colocar el valor por defecto con el botón reset', () => {
        const wrapper = shallow( <CounterApp value={105}/> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const contador = parseInt( wrapper.find('h2').text() );
        
        expect( contador ).toBe(105);
        
    })
    

})
