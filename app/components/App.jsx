import React from 'react';
import CSSModules from 'react-css-modules';
import Proptypes from 'prop-types';

import styles from './App.pcss';
import ProductsList from './ProductsListing/ProductsList';

class App extends React.Component {

    render() {
        const {productsList} = this.props;

        return (
            <div className="container">
                <label styleName="main">hello flexbox</label>
                <ProductsList productsList={productsList}/>
            </div>
        );
    }
}

App.propTypes = {
    productsList: Proptypes.array,
}

export default CSSModules(App, styles, { allowMultiple: true });
