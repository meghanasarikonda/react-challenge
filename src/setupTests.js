// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });