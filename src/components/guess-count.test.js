import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />);
    });
});