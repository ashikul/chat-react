import React from 'react'
import {shallow} from 'enzyme'
import Chatbox from '../components/Chatbox';

const setup = (user = '', receivingUser = '') => {

    const component = shallow(
        <Chatbox user={user} receivingUser={receivingUser}/>
    );

    return {
        component: component,
        button: component.find('.send-button'),
        input: component.find('.input-message'),
        header: component.find('h4'),
    }
};

describe('Chatbox component', () => {

    it('should display users name in header', () => {
        const {component} = setup('Rob', 'Laura');
        expect(component.text()).toMatch('Rob\'s Chatbox')
    });

    it('initially empty text should disable button', () => {
        const {button} = setup();
        expect(button.prop('disabled')).toEqual(true)
    });

    xit('typing should enable the button', () => {
        const {component} = setup('Rob', 'Laura');
        const {button} = setup();
        const evt = {
            target: {
                value: 'Hello'
            }
        };
        console.log(component.instance());
        component.instance().handleTextChanged(evt)
        //TODO: error, add in APIservice
        expect(button.prop('disabled')).toEqual(false)
    });

});
