import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../../components/Login/LoginForm';

describe('<LoginForm />', () => {

  it('renders without crashing', () => {
    shallow(<LoginForm />);
  });

});