import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import CartItemContainer from './../CartItem/CartItemContainer';
import styles from './CartItemsList.pcss';

class CartItemsList extends React.Component {
    _renderCartItems = () => {
        const { cartItems } = this.props;

        return Object.keys(cartItems).map(key => {
            return <CartItemContainer key={key} itemId={key} />;
        });
    };

    render() {
        return <div styleName="cart-items-list">{this._renderCartItems()}</div>;
    }
}

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
