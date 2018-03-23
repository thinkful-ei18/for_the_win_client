import React from 'react';
import { shallow } from 'enzyme';

import Instructions from '../../components/LandingPage/Instructions';

describe('<Instructions />', () => {

  it('renders without crashing', () => {
    shallow(<Instructions />);
  });

});