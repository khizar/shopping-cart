import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './App.pcss';
import ProductsList from './ProductsListing/ProductsList';
import Cart from './Cart/Cart';
import AppNav from './AppNav';

class App extends React.Component {
    render() {
        const { productsList, cartTotal, cartItemsCount, currency } = this.props;

        return (
            <div styleName="app" className="container">
                <section styleName="app__wrapper">
                    <AppNav
                        currency={currency}
                        cartTotal={cartTotal}
                        cartItemsCount={cartItemsCount}
                    />
                    <Route
                        exact
                        path="/"
                        render={routeProps => (
                            <ProductsList {...routeProps} productsList={productsList} />
                        )}
                    />
                    <Route path="/cart" component={Cart} />
                </section>
            </div>
        );
    }
}

App.defaultProps = {
    productsList: [],
    cartItemsCount: 0,
    cartTotal: 0
};

App.propTypes = {
    productsList: PropTypes.array,
    cartItemsCount: PropTypes.number,
    cartTotal: PropTypes.number,
    currency: PropTypes.string
};

export default CSSModules(App, styles, { allowMultiple: true });
