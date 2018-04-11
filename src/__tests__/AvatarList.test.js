import React from 'react';
import ReactDOM from 'react-dom';
import AvatarList from '../components/AvatarList';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

function setup() {

  const props = {
    image: {
      src: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
      id: 1,
      label: 'picture'
    },
    closebox: () => {
      console.log('opened popover')
    },
    imagelist: [
      { src: 'avatar1.png', label: 'Avatar 1', id: 1 },
      { src: 'avatar2.png', label: 'Avatar 2', id: 2 },
      { src: 'avatar3.png', label: 'Avatar 3', id: 3 },
      { src: 'avatar4.png', label: 'Avatar 4', id: 4 },
      { src: 'avatar5.png', label: 'Avatar 5', id: 5 },
      { src: 'avatar6.png', label: 'Avatar 6', id: 6 }
    ],
    imageUpdater: () => {
      console.log('imageUpdater')
    },
    loadingChecker: () => {
      console.log('loadingChecker')
    }
  }
 
  const enzymeWrapper = mount(<AvatarList {...props} />)
 
  return {
    props,
    enzymeWrapper
  }
}

describe('AvatarList', () => {

  it('should render correctly', () => {
    const {enzymeWrapper} = setup();
    expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should have 4 key values in state', () => {
    const {enzymeWrapper} = setup();
    expect(Object.keys(enzymeWrapper.state()).length).toBe(4);
  });

  it('should have closePopover as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('closePopover')).toBe(true);
  });

  it('should have imageList as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('imageList')).toBe(true);
  });

  it('should have isLoading as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('isLoading')).toBe(true);
  });

  it('should have popover as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('popover')).toBe(true);
  });

  it('should have handleClick method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().handleClick).toBe('function');
  });

  it('should have clickoutside method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().clickoutside).toBe('function');
  });

  it('should have componentWillMount method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().componentWillMount).toBe('function');
  });

  it('should have componentWillUnount method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().componentWillUnmount).toBe('function');
  });

  it('should have h1 tag', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.find('h1').length).toBe(1);
  });

  it('should have ul tag', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.find('ul').length).toBe(1);
  });

  it('should have li tags', () => {
    const {enzymeWrapper} = setup();
    const imageListLength = (enzymeWrapper.state().imageList).length;
    expect(enzymeWrapper.find('li').length).toBe(imageListLength);
  });

});


