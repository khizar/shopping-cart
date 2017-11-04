import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './CartItem.pcss';

class CartItem extends React.Component {
    render() {
        const { product, cartItem, currency } = this.props;

        return (
            <div styleName="cart-item" className="container">
                <section styleName="cart-item__item-info">
                    <img styleName="cart-item__thumbnail" src={product.image} alt={product.name} />
                    <label styleName="cart-item__name">{product.name}</label>
                </section>
                <section styleName="cart-item__item-quantity-section">
                    <label styleName="cart-item__quantity">{cartItem.quantity}</label>
                </section>

                <label styleName="cart-item__sub-total">{`${cartItem.subTotal} ${currency}`}</label>
            </div>
        );
    }
}

CartItem.propTypes = {
    product: PropTypes.object,
    cartItem: PropTypes.object,
    currency: PropTypes.string
};

export default CSSModules(CartItem, styles, { allowMultiple: true });
