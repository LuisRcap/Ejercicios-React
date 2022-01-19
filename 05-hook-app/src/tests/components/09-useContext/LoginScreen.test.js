import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import LoginScreen from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {
    
    const setUser = jest.fn()

    const user = {
        name: 'Luis',
        email: 'luis@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe ejecutar el setUser con el argumento esperado', () => {
        
        wrapper.find('button').simulate('click')
        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith({
            ...user,
            id: 1234,
            name: 'Luis Rico'
        });

    });
    

});
