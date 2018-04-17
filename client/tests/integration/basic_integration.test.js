import React from 'react';
import Enzyme, {
  shallow,
  mount,
  render,
  ReactWrapper
} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import 'jsdom-global/register';

import App from '../../src/App'

describe('basic integration tests', () => {

  // let router;

  // beforeEach(() => {
  //   router = {
  //     params: { myParam: 'any-params-you-have' },
  //   };
  //   ({ dispatchSpy } = setupIntegrationTest({ myReducer }, router));
  // });

  it('should change the text on click', () => {
    const app = mount(
      <div>
        <App />
      </div>
    );

    app.find('div').simulate('click');

    expect(app.find('div').prop('children')).toEqual('new text');
  });

});
