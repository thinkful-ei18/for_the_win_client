import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import { TheDraft } from '../../components/Draft/TheDraft';

const mockStore = configureMockStore()

describe('<TheDraft />', () => {

  it('renders without crashing', () => {
    const store = mockStore({})

    shallow(<TheDraft dispatch={jest.fn()} store={store} />);
  });

});