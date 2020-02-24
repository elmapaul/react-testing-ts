import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without warning', () => {
  // const wrapper = setup();
  // console.log(wrapper.debug());
  //
  // const appComponent = findByTestAttr(wrapper, 'component-app');
  // expect(appComponent.length).toBe(1);
});
// test('renders without warning', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// });
// test('renders without warning', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display')
//   expect(counterDisplay.length).toBe(1);
// });
// test('[App] counter starts at 0', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('counter');
//   expect(initialCounterState).toBe(0);
// });
// test('clicking button increments counter display', () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//
//   // find button and click
//   const button = findByTestAttr(wrapper, 'increment-button');
//   button.simulate('click');
//
//   // find display and test value
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter + 1);
// })