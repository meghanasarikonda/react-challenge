import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


function setup() {
 
  const enzymeWrapper = mount(<Main />)
 
  return {
    enzymeWrapper
  }
}

describe('Main', () => {

  it('should render correctly', () => {
    const {enzymeWrapper} = setup()
    expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should have 4 key-value pairs in state', () => {
    const {enzymeWrapper} = setup()
    expect(Object.keys(enzymeWrapper.state()).length).toBe(4);
  });

  it('should have SingleAvatar as child', () => {
    const {enzymeWrapper} = setup()
    expect(enzymeWrapper.find('SingleAvatar').length).toBe(1);
  });

  it('should have AvatarList as child', () => {
    const {enzymeWrapper} = setup()
    expect(enzymeWrapper.find('AvatarList').length).toBe(0);
    //enzymeWrapper.find('Main').at(2).simulate('click');
    // console.log(enzymeWrapper.find('CSSTransition').find('AvatarList'), '<<<<<<<<')
    enzymeWrapper.setState({ openAvatarList: true });
    expect(enzymeWrapper.find('AvatarList').length).toBe(1);
  });

  it('should have image as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('image')).toBe(true);
  });

  it('should have ImageList as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('ImageList')).toBe(true);
  });

  it('should have openAvatarList as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('openAvatarList')).toBe(true);
  });

  it('should have isLoading as key in state', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.state().hasOwnProperty('isLoading')).toBe(true);
  });

  it('should have closebox function', () => {
    const {enzymeWrapper} = setup();
    enzymeWrapper.setState({ openAvatarList: true });
    expect(typeof enzymeWrapper.instance().closebox).toBe('function');
    enzymeWrapper.instance().closebox();
    expect(enzymeWrapper.state().openAvatarList).toBe(false);
  });

  it('should have loadingChecker method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().loadingChecker).toBe('function');
  });

  it('should have openPopover method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().openPopover).toBe('function');
  });

  it('should have imageUpdater method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().imageUpdater).toBe('function');
  });

  it('should have SingleAvatar method', () => {
    const {enzymeWrapper} = setup();
    expect(typeof enzymeWrapper.instance().singleavatar).toBe('function');
  })

})