import React from 'react';
import { shallow } from 'enzyme';

import Register from '../../components/Register/Register';

describe('<Register />', () => {

  it('renders without crashing', () => {
    shallow(<Register />);
  });

});