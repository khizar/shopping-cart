import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Cart from './Cart';

describe('<Cart />', () => {
    it('should render without props ', () => {
        const wrapper = shallow(<Cart />);

        expect(wrapper.find('div')).to.have.length(1);
    });
});
