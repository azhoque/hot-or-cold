import React from 'react';
import { shallow } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Render without crashing', () => {
        shallow(<GuessForm />);
    });
});