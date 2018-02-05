import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Render without crashing', () => {
        shallow(<Feedback />);
    });
});