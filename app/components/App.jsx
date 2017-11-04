import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';

import styles from './App.pcss';
import ProductsList from './ProductsListing/ProductsList';
import Cart from './Cart/Cart';
import { CART_ROUTE, HOME_ROUTE } from '../constants/MIscellenousConstants';

class App extends React.Component {
    render() {
        const { productsList, cartTotal, cartItemsCount, currency } = this.props;

        return (
            <div styleName="app" className="container">
                <section styleName="app__wrapper">
                    <section styleName="app__cart-view">
                        <label>
                            Items in cart: <b>{cartItemsCount}</b>
                        </label>
                        <section styleName="app__cart-details">
                            <label>
                                Cart Total: <b>{`${cartTotal} ${currency}`}</b>
                            </label>
                            {this.props.location.pathname === HOME_ROUTE && (
                                <Link to={CART_ROUTE} styleName="app__nav-link">
                                    view cart
                                </Link>
                            )}
                            {this.props.location.pathname === CART_ROUTE && (
                                <Link to={HOME_ROUTE} styleName="app__nav-link">
                                    view products
                                </Link>
                            )}
                        </section>
                    </section>
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

export default withRouter(CSSModules(App, styles, { allowMultiple: true }));
