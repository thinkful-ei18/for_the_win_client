import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import { Login } from '../../components/Login/Login';

const mockStore = configureMockStore()

describe('<Login />', () => {

  it('renders without crashing', () => {
    const store = mockStore({})

    shallow(<Login dispatch={jest.fn()} store={store} />);
  });

});