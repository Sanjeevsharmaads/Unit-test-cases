import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Demo from '../src/Demo';

const wrapper = mount(<Demo />)
describe('Demo Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  })
})