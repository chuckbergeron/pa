import React from 'react';
import ReactDOM from 'react-dom';

import 'jsdom-global/register';

import {
  BrowserRouter
} from 'react-router-dom'

import App from '../../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
