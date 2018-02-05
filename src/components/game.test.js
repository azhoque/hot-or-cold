import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Render without crashing', () => {
        shallow(<Game />);
    });
});