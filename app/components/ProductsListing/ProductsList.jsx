import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ProductsList.pcss';

class ProductsList extends React.Component {


    render() {
        return (
            <section>
                {this.props.productsList.map(product => {
                    return (
                        <div key={product.id} styleName='product'>
                            <img src={product.image} alt={product.name} styleName='product__image'/>
                            <label styleName='product__name'>{product.name}</label>
                            <label styleName='product__price'>{product.price}</label>
                        </div>)
                })}
            </section>
        )
    }
}

ProductsList.defaultProps = {
    productsList: []
}

ProductsList.propTypes = {
    productsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.string,
        image: PropTypes.string,
    }))
};

export default CSSModules(ProductsList, styles, {allowMultiple: true});
