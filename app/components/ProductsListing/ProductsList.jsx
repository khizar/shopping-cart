import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ProductsList.pcss';
import ProductItem from './ProductItem/ProductItem';

const ProductsList = ({ productsList, currency, addItemToCart }) => (
    <section styleName="products-list">
        {productsList.map(product => {
            return (
                <ProductItem
                    key={product.id}
                    product={product}
                    currency={currency}
                    addItemToCart={addItemToCart}
                />
            );
        })}
    </section>
);

ProductsList.defaultProps = {
    productsList: []
};

ProductsList.propTypes = {
    productsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.numbr,
            image: PropTypes.string
        })
    ),
    currency: PropTypes.string,
    addItemToCart: PropTypes.func
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
