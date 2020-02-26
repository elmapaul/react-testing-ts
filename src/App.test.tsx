import React from 'react';
import {shallow} from 'enzyme';
import {storeFactory} from '../test/testUtils';
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setup = (state={}) => {
  const store = storeFactory(state);
  return shallow(<App store={store}/>).dive().dive();
};

describe('redux properties', () => {
  test('has access to `success` state', ()=>{
    const success = true;
    const wrapper = setup({success});
    // @ts-ignore
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', ()=>{
    const secretWord = 'party';
    const wrapper = setup({secretWord})
    // @ts-ignore
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', ()=>{
    const guessedWords = [ { guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({ guessedWords });
    // @ts-ignore
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords)
  });
  test('`getSecretWord` action creator is a function on the props', ()=>{
    const wrapper = setup();
    // @ts-ignore
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', ()=>{
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  // set up app component with getSecretWordMock as the getSecretWord prop
  // @ts-ignore
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method
  // @ts-ignore
  // wrapper.instance().componentDidMount();  // TODO: Should comment out

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});