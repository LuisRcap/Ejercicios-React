import React from "react";
import { shallow } from "enzyme";
import HookApp from '../HookApp';

describe('Preubas en <HookApp />', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();
    });
    

});
