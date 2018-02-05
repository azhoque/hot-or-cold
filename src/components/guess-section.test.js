import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Render without crashing', () => {
        shallow(<GuessSection />);
    });
});
