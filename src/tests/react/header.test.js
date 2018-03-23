import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('<Header />', () => {

  it('renders without crashing', () => {
    shallow(<Header />);
  });

});