import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import styles from './App.pcss';
import ProductsList from './ProductsListing/ProductsList';
import Cart from './Cart/Cart';

class App extends React.Component {
    render() {
        const { productsList } = this.props;

        return (
            <div styleName="app" className="container">
                <section styleName="app__wrapper">
                    <section styleName="app__cart-view">
                        <label>
                            Items in cart: <b>{this.props.cartItemsCount}</b>
                        </label>
                        {this.props.location.pathname === '/' && (
                            <Link to="/cart" styleName="app__nav-link">
                                view cart
                            </Link>
                        )}
                        {this.props.location.pathname === '/cart' && (
                            <Link to="/" styleName="app__nav-link">
                                view products
                            </Link>
                        )}
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
    cartItemsCount: 0
};

App.propTypes = {
    productsList: PropTypes.array,
    cartItemsCount: PropTypes.number
};

export default withRouter(CSSModules(App, styles, { allowMultiple: true }));
