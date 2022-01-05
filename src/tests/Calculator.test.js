import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  it('should be able to add numbers', () => {
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const addOperator = container.find('#operator_add');
    const equalsOperator = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    addOperator.simulate('click');
    button1.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('5');

  })

  it('should be able to subtract numbers', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subtractOperator = container.find('#operator-subtract');
    const equalsOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractOperator.simulate('click');
    button4.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3')

  })

  it('should be able to multiply numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyOperator = container.find('#operator-multiply');
    const equalsOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyOperator.simulate('click');
    button5.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('15')

  })

  it('should be able to divide numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideOperator = container.find('#operator-divide');
    const equalsOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideOperator.simulate('click');
    button7.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should be able to chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const multiplyOperator = container.find('#operator-multiply');
    const equalsOperator = container.find('#operator-equals');
    const addOperator = container.find('#operator_add');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    multiplyOperator.simulate('click');
    button7.simulate('click');
    addOperator.simulate('click');
    button1.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })



})

