import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './CartItem.pcss';

class CartItem extends React.Component {
    handleDeleteItemClick() {
        this.props.deleteItem(this.props.itemId);
    }
    handleIncrementAmountClick() {
        this.props.incrementItemQuantity(this.props.itemId);
    }
    handleDecrementAmountClick() {
        this.props.decrementItemQuantity(this.props.itemId);
    }
    render() {
        const { product, cartItem, currency } = this.props;

        return (
            <div styleName="cart-item" className="container">
                <section styleName="cart-item__item-info">
                    <img styleName="cart-item__thumbnail" src={product.image} alt={product.name} />
                    <label styleName="cart-item__name">{product.name}</label>
                </section>
                <section styleName="cart-item__item-quantity-section">
                    <button
                        className="js-increment-button"
                        styleName="cart-item__icon cart-item__icon--plus"
                        title="Add to Cart"
                        onClick={this.handleIncrementAmountClick.bind(this)}
                    />
                    <label styleName="cart-item__quantity">{cartItem.quantity}</label>
                    <button
                        className="js-decrement-button"
                        styleName="cart-item__icon cart-item__icon--minus"
                        title="Add to Cart"
                        onClick={this.handleDecrementAmountClick.bind(this)}
                    />
                </section>
                <section styleName="cart-item__amount-section">
                    <label styleName="cart-item__sub-total">{`${cartItem.subTotal} ${currency}`}</label>
                    <button
                        className="js-delete-button"
                        styleName="cart-item__delete-button"
                        title="Add to Cart"
                        onClick={this.handleDeleteItemClick.bind(this)}
                    />
                </section>
            </div>
        );
    }
}

CartItem.defaultProps = {
    product: {},
    cartItem: {}
};

CartItem.propTypes = {
    itemId: PropTypes.string,
    product: PropTypes.object,
    cartItem: PropTypes.object,
    currency: PropTypes.string,
    deleteItem: PropTypes.func,
    incrementItemQuantity: PropTypes.func,
    decrementItemQuantity: PropTypes.func
};

export default CSSModules(CartItem, styles, { allowMultiple: true });
