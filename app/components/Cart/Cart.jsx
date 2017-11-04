import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import CartItemsList from './CartItemsList/CartItemsList';

import styles from './Cart.pcss';

class Cart extends React.Component {
    render() {
        const { itemsInCart } = this.props;

        return (
            <div styleName="cart">
                <CartItemsList cartItems={itemsInCart} />
            </div>
        );
    }
}

Cart.propTypes = {
    itemsInCart: PropTypes.object
};

export default CSSModules(Cart, styles, { allowMultiple: true });
