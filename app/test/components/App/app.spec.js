import React from 'react';
import { it, describe } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../../components/App/App';

describe('<App/>', () => {
    it('renders without any error', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div')).to.have.length(1);
    });
});
