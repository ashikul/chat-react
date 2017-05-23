import React from 'react';
import MessageBox from '../components/MessageBox';
import {shallow} from 'enzyme';

const setup = props => {
    const component = shallow(
        <MessageBox {...props} />
    );

    return {
        component: component
    }
};

describe('MessageBox component', () => {
    it('should render user, message, and formatted date', () => {
        const {component} = setup({text: 'Hello', time: '2017-05-22T23:42:44.213Z', user: "Rob", isYourMessage: false});
        expect(component.text()).toBe(' Rob: Hello Today 7:42 pm')
    });

    it('should render user as You, message, and formatted date', () => {
        const {component} = setup({text: 'Hello', time: '2017-05-22T23:42:44.213Z', user: "Rob", isYourMessage: true});
        expect(component.text()).toBe(' You: Hello Today 7:42 pm')
    });
});