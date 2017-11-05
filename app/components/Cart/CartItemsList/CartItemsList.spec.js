import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CartItemsList from './CartItemsList';

describe('<CartItemsList />', () => {
    it('should render without props ', () => {
        const wrapper = shallow(<CartItemsList />);

        expect(wrapper.find('div')).to.have.length(1);
    });
});
