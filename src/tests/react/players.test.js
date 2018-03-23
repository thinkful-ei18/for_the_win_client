import React from 'react';
import { shallow } from 'enzyme';

import { Players } from '../../components/Draft/Players';

describe('<Players />', () => {

  it('renders without crashing', () => {
    const players = [];
    const team = [];

    shallow(<Players 
              dispatch={jest.fn()}  
              players={players} 
              team={team} 
            />);
  });

});
