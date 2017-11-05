import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ProductItem.pcss';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
    }

    handleAddToCartClick() {
        this.props.addItemToCart(this.props.product.id);
    }

    render() {
        const { product, currency } = this.props;

        return (
            <div key={product.id} styleName="product">
                <button
                    styleName="product__add-to-cart-button"
                    title="Add to Cart"
                    onClick={this.handleAddToCartClick}
                />
                <img styleName="product__image" src={product.image} alt={product.name} />
                <section styleName="product__details">
                    <label styleName="product__name">{product.name}</label>
                    <label styleName="product__price">
                        {product.price} {currency}
                    </label>
                    <span styleName="product__desc">{product.description}</span>
                </section>
            </div>
        );
    }
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        description: PropTypes.string
    }),
    currency: PropTypes.string
};

export default CSSModules(ProductItem, styles, { allowMultiple: true });
