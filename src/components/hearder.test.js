import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Render without crashing', () => {
        shallow(<Header />);
    });
});