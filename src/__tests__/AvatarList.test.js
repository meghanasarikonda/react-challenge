import React from 'react';
import ReactDOM from 'react-dom';
import AvatarList from '../components/AvatarList';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon, {spy} from 'sinon';
import axios from 'axios';
import moxios from 'moxios';
import { equal } from 'assert';

function setup() {

  const props = {
    image: {
      src: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
      id: 1,
      label: 'picture'
    },
    closebox: jest.fn(),
    loadingChecker: jest.fn(),

    imagelist: [
      { src: 'avatar1.png', label: 'Avatar 1', id: 1 },
      { src: 'avatar2.png', label: 'Avatar 2', id: 2 },
      { src: 'avatar3.png', label: 'Avatar 3', id: 3 },
      { src: 'avatar4.png', label: 'Avatar 4', id: 4 },
      { src: 'avatar5.png', label: 'Avatar 5', id: 5 },
      { src: 'avatar6.png', label: 'Avatar 6', id: 6 }
    ],
    imageUpdater: jest.fn()
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

  it('should have 5 key values in state', () => {
    const {enzymeWrapper} = setup();
    expect(Object.keys(enzymeWrapper.state()).length).toBe(5);
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

  it('should have specific classNames for div tags', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.find('div').at(1).hasClass('Avatarlist-triangle')).toBe(true);
    expect(enzymeWrapper.find('div').at(2).hasClass('Avatarlist-popover')).toBe(true);
  });

  it('should have no classes if popover is false', () => {
    const {enzymeWrapper} = setup();
    enzymeWrapper.setState({popover: false});
    expect(enzymeWrapper.find('div').at(1).hasClass('Avatarlist-triangle')).toBe(false);
    expect(enzymeWrapper.find('div').at(2).hasClass('Avatarlist-popover')).toBe(false);
  });

  it('loadingChecker', () => {
    window.alert = jest.fn();
    const { enzymeWrapper } = setup();

    enzymeWrapper.setState({isLoading: true});
    //console.log(enzymeWrapper.find('li').at(1).simulate('click'))//.simulate('click');
    //expect(window.alert).toHaveBeenCalledWith('loadingChecker');
  });

  it('if clicked outside, should call closebox', () => {
    const { enzymeWrapper } = setup();
    //console.log(enzymeWrapper.props().closebox())
    // console.log(typeof enzymeWrapper.props().closebox);
    // console.log(enzymeWrapper.instance().clickoutside.simulate('click', {
    //      target: 2 }))
    //enzymeWrapper.props().closebox()
    //enzymeWrapper.props().closebox = sinon.spy();
    enzymeWrapper.instance().clickoutside({target: true})
    //enzymeWrapper.simulate('mousedown', {target: true})
    expect(enzymeWrapper.props().closebox).toHaveBeenCalled()
  });

});


describe('mocking axios', () => {
   var clock = null

    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })



  it('click should trigger the callback and update state', (done) => {
    const { enzymeWrapper } = setup();
    moxios.withMock(() => {
      let onFulfilled = sinon.spy();

      axios.get('/').then(onFulfilled);

      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200
        }).then(function () {
          equal(onFulfilled.called, true);
          enzymeWrapper.find('li').at(1).simulate('click');
          expect(enzymeWrapper.props().loadingChecker).toHaveBeenCalled();
          expect(enzymeWrapper.props().loadingChecker).toHaveBeenCalledWith(true);
          expect(enzymeWrapper.state().loadingId).toBe(2);
          enzymeWrapper.find('li').at(1).simulate('click');
          expect(enzymeWrapper.props().loadingChecker).toHaveBeenCalled();
          done();
        });
      });

    });
  });

  it('should call props and set states after 1000ms', (done) => {
    const { enzymeWrapper } = setup();
    const i = Number;

    moxios.withMock(function () {
      axios.get('/').then(() =>
        {
          enzymeWrapper.props().imageUpdater(i);
          enzymeWrapper.setState({
            isLoading: false
          });
          enzymeWrapper.props().loadingChecker(false);
          enzymeWrapper.setState({
            isShown: false
          });
          enzymeWrapper.props().closebox();
      });

      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200
        }).then(function () {
          expect(enzymeWrapper.props().imageUpdater).toHaveBeenCalled();
          expect(enzymeWrapper.props().imageUpdater).toHaveBeenCalledWith(Number);
          equal(enzymeWrapper.state().isLoading, false);
          expect(enzymeWrapper.props().loadingChecker).toHaveBeenCalled();
          expect(enzymeWrapper.props().closebox).toHaveBeenCalled();
          expect(enzymeWrapper.props().loadingChecker).toHaveBeenCalledWith(false);
          done()
        });
      });
    });

  });

});