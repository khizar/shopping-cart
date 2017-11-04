import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ProductsList.pcss';
import ProductItemContainer from './ProductItem/ProductItemContainer';

class ProductsList extends React.Component {
    _renderItems = () => {
        return this.props.productsList.map(product => {
            return <ProductItemContainer key={product.id} product={product} />;
        });
    };

    render() {
        return <section styleName="products-list">{this._renderItems()}</section>;
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
            price: PropTypes.numbr,
            image: PropTypes.string
        })
    )
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
