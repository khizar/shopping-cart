import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './CartItem.pcss';

class CartItem extends React.Component {
    handleDeleteItemClick = () => {
        this.props.deleteItem(this.props.itemId);
    };

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
                <section styleName="cart-item__amount-section">
                    <label styleName="cart-item__sub-total">{`${cartItem.subTotal} ${currency}`}</label>
                    <button
                        styleName="cart-item__delete-button"
                        title="Add to Cart"
                        onClick={this.handleDeleteItemClick}
                    />
                </section>
            </div>
        );
    }
}

CartItem.propTypes = {
    itemId: PropTypes.string,
    product: PropTypes.object,
    cartItem: PropTypes.object,
    currency: PropTypes.string,
    deleteItem: PropTypes.func
};

export default CSSModules(CartItem, styles, { allowMultiple: true });
