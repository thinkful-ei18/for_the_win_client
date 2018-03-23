import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Login/Input';

describe('<Input />', () => {

  it('renders without crashing', () => {
    shallow(<Input />);
  });

});