import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ProductsList.pcss';
import ProductItem from './../ProductItem/ProductItem';

class ProductsList extends React.Component {
    render() {
        return (
            <section styleName="products-list">
                {this.props.productsList.map(product => {
                    return <ProductItem key={product.id} product={product} />;
                })}
            </section>
        );
    }
}

ProductsList.defaultProps = {
    productsList: []
};

ProductsList.propTypes = {
    productsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.string,
            image: PropTypes.string
        })
    )
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
