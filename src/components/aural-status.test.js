import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Render without crashing', () => {
        shallow(<AuralStatus />);
    });
});