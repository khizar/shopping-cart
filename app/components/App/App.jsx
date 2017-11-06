import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './App.pcss';

import ProductsListContainer from '../../containers/ProductsListContainer';
import CartContainer from '../../containers/CartContainer';
import AppNav from '../AppNav/AppNav';
import { CART_ROUTE, HOME_ROUTE } from '../../constants/RouteConstants';

class App extends React.Component {
    render() {
        const { cartTotal, cartItemsCount, currency, emptyCart } = this.props;

        return (
            <div styleName="app" className="container">
                <section styleName="app__wrapper">
                    <AppNav
                        currency={currency}
                        cartTotal={cartTotal}
                        cartItemsCount={cartItemsCount}
                        emptyCart={emptyCart}
                    />
                    <Route
                        exact
                        path={HOME_ROUTE}
                        render={routeProps => <ProductsListContainer {...routeProps} />}
                    />
                    <Route path={CART_ROUTE} component={CartContainer} />
                </section>
            </div>
        );
    }
}

App.defaultProps = {
    cartItemsCount: 0,
    cartTotal: 0
};

App.propTypes = {
    cartItemsCount: PropTypes.number,
    cartTotal: PropTypes.number,
    currency: PropTypes.string,
    emptyCart: PropTypes.func
};

export default CSSModules(App, styles, { allowMultiple: true });
