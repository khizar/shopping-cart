import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import CartItemContainer from './../CartItem/CartItemContainer';
import styles from './CartItemsList.pcss';

const CartItemsList = ({ cartItems }) => (
    <div styleName="cart-items-list">
        {Object.keys(cartItems).map(key => {
            return <CartItemContainer key={key} itemId={key} />;
        })}
    </div>
);

CartItemsList.defaultProps = {
    cartItems: {}
};

CartItemsList.propTypes = {
    cartItems: PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
        subTotal: PropTypes.number
    })
};

export default CSSModules(CartItemsList, styles, { allowMultiple: true });
