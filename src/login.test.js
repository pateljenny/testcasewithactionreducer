import React from 'react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from './Login';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Login />);
})

describe('login component', () => {
    it('has two text inputs', () => {
        const textInputs = wrapper.find('input')
        expect(textInputs.length).toEqual(3);
    })

    it('has a login button', () => {
        const buttons = wrapper.find('button');
        expect(buttons.length).toEqual(1);
        expect(buttons.prop('children')).toBe('Login');
    })

    it('has initial state empty', () => {
        const { email, password } = wrapper.state();
        expect(email).toBe("");
        expect(password).toBe("");
    })

    it('changes the state on change event in the input fields', () => {
        const emailInput = wrapper.find('input[type="email"]')
        const passwrdInput = wrapper.find('input[type="password"]')
        emailInput.simulate('change', {
            target: { value: 'jenny@gmail.com' }
        })
        passwrdInput.simulate('change', {
            target: { value: 'jenny' }
        })
        const { email, password } = wrapper.state();
        expect(email).toBe("jenny@gmail.com");
        expect(password).toBe("jenny");

    })

    it('calls onClick event handler when Login button is clicked', () => {
        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
        wrapper.update();
        wrapper.instance().forceUpdate();
        const button = wrapper.find('button');
        button.simulate('click');
        expect(spy).toHaveBeenCalled();
    })
})
