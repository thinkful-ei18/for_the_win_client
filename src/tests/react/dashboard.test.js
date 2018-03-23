import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import { Dashboard } from '../../components/Dashboard/Dashboard';

const mockStore = configureMockStore()

describe('<Dashboard />', () => {

  it('renders without crashing', () => {
    const store = mockStore({})

    shallow(<Dashboard dispatch={jest.fn()} store={store}/>);
  });

});