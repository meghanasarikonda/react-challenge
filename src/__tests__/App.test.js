import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have Main as a child', () => {
  const enzymeWrapper = shallow(<App />);
  expect(enzymeWrapper.find('Main').length).toBe(1);
});
