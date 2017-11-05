import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import CartItem from './CartItem';

describe('<CartItem />', () => {
    it('should render without props ', () => {
        const wrapper = shallow(<CartItem />);

        expect(wrapper.find('div')).to.have.length(1);
    });

    it('should call click handler for the increment button', () => {
        const incrementButtonSpy = sinon.spy(CartItem.prototype, 'handleIncrementAmountClick');
        const wrapper = mount(<CartItem incrementItemQuantity={() => ''} />);
        wrapper.update();

        // console.log(wrapper.find('button.js-increment-button').debug());
        wrapper.find('button.js-increment-button').simulate('click');

        expect(incrementButtonSpy.calledOnce).to.be.true;
        CartItem.prototype.handleIncrementAmountClick.restore();
    });

    it('should call click handler for the decrement button', () => {
        const decrementButtonSpy = sinon.spy(CartItem.prototype, 'handleDecrementAmountClick');
        const wrapper = mount(<CartItem decrementItemQuantity={() => ''} />);
        wrapper.update();

        wrapper.find('button.js-decrement-button').simulate('click');

        expect(decrementButtonSpy.calledOnce).to.be.true;
        CartItem.prototype.handleDecrementAmountClick.restore();
    });

    it('should call click handler for the delete button', () => {
        const deleteButtonSpy = sinon.spy(CartItem.prototype, 'handleDeleteItemClick');
        const wrapper = mount(<CartItem deleteItem={() => ''} />);
        wrapper.update();

        wrapper.find('button.js-delete-button').simulate('click');

        expect(deleteButtonSpy.calledOnce).to.be.true;
        CartItem.prototype.handleDeleteItemClick.restore();
    });
});
