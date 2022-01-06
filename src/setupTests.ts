/* globals jest */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect, jest } from '@jest/globals';
import 'jest-extended';

import ReactGA from 'react-ga';

const matchers = require('jest-extended/all');

expect.extend(matchers);
Enzyme.configure({ adapter: new Adapter() });

ReactGA.initialize('dummy', { testMode: true });

global.ResizeObserver = require('resize-observer-polyfill');
