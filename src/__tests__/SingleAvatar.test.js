import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './components/Main';
import SingleAvatar from '../components/SingleAvatar';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


function setup() {
  const props = {
    image: {
      src: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
      id: 1,
      label: 'picture'
    },
    openPopover: jest.fn()
  }
 
  const enzymeWrapper = mount(<SingleAvatar {...props} />)
 
  return {
    props,
    enzymeWrapper
  }
}

describe('SingleAvatar', () => {

  it('should render correctly', () => {
    const {enzymeWrapper} = setup()
    expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should have img tag', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('img').length).toBe(1);
  });

  it('img should have a class named avatar', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('img').hasClass('avatar')).toBe(true);
  });

  it('checking component props', () => {
    const { enzymeWrapper } = setup();
    const SingleAvatarProps = enzymeWrapper.find('SingleAvatar').props();

    expect(Object.keys(SingleAvatarProps).length).toBe(2);
    expect(typeof SingleAvatarProps.image).toBe('object');
    expect(typeof SingleAvatarProps.openPopover).toBe('function');
  });

  it('should have handleClick method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().handleClick).toBe('function');
  });

  it('click event', () => {
    window.alert = jest.fn();
    const { enzymeWrapper } = setup();
    const SingleAvatarProps = enzymeWrapper.find('SingleAvatar').props();

    enzymeWrapper.find('img').simulate('click');
    expect(enzymeWrapper.props().openPopover).toHaveBeenCalled();
  });

})