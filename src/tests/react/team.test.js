import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import { Team } from '../../components/Dashboard/Team';

const mockStore = configureMockStore()

describe('<Team />', () => {

  it('renders without crashing', () => {
    const store = mockStore({})
    const team = {};
    const stats = {};
    const loading = {};
    const error = {};

    shallow(<Team 
              dispatch={jest.fn()} 
              store={store} 
              team={team} 
              stats={stats} 
              loading={loading} 
              error={error} />);
  });

});
