import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput }  from './Input';

/**
 * Factory function to create a Shallow
 * @function setup
 * @param initialState
 * @return {ShallowWrapper}
 */
const setup = (initialState= {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store} /> ).dive().dive();
}

setup();

describe('render', ()=>{
    describe('word has not been guessed', ()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = { success: true }
            wrapper = setup(initialState);
        })

        test('renders component without error', ()=>{
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('renders input box', ()=>{
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(0);
        });

        test('renders submit button', ()=>{
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0)
        });
    });

    describe('word has been guessed', ()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = { success: false }
            wrapper = setup(initialState);
        })

        test('renders component without error', ()=>{
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('does not render input box', ()=>{
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1)
        });

        test('does not render submit button', ()=>{
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1)
        });
    });
});

describe('redux props', ()=>{
    test('has success piece of state as prop', ()=>{
        const success = true;
        const wrapper = setup({success});
        // @ts-ignore
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(true);
    });

    test('`guessWord` action creator is function prop', ()=>{
        const wrapper = setup();
        // @ts-ignore
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
});

describe('`guessWord` action creator call', ()=>{
    let guessWordMock;
    let wrapper;
    let guessedWord="train";

    beforeEach(()=>{
        // set up mock for guessWord
        guessWordMock = jest.fn();
        // const props = {
        //     guessWord: guessWordMock
        // };

        // set up app component with guessWordMock as the guessWord prop
        // @ts-ignore
        wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

        // add value to input box
        wrapper.setState({ currentGuess: guessedWord });

        // simulate click
        const submit = findByTestAttr(wrapper, 'submit-button');
        submit.simulate('click', { preventDefault() {} })
    });

    test('calls `guessWord` once', ()=>{
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', ()=>{
        const guessWordArg = guessWordMock.mock.calls[0][0];
        // console.log('guessWordMock', guessWordMock.mock.calls);
        expect(guessWordArg).toBe(guessedWord);
    });
});
