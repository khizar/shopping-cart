import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import { CART_ROUTE, HOME_ROUTE } from '../../constants/RouteConstants';
import styles from '../App/App.pcss';

const AppNav = ({ cartItemsCount, cartTotal, currency, location, emptyCart }) => (
    <section styleName="app__cart-view">
        <section styleName="app__products-in-cart">
            <label>
                Products in cart: <b>{cartItemsCount}</b>
            </label>
            <button styleName="app__empty-cart-button" onClick={emptyCart} />
        </section>

        <section styleName="app__cart-details">
            <label>
                Cart Total: <b>{`${cartTotal} ${currency}`}</b>
            </label>

            {location.pathname === HOME_ROUTE && (
                <Link to={CART_ROUTE} styleName="app__nav-link">
                    view cart
                </Link>
            )}

            {location.pathname === CART_ROUTE && (
                <Link to={HOME_ROUTE} styleName="app__nav-link">
                    view products
                </Link>
            )}
        </section>
    </section>
);

AppNav.propTypes = {
    cartItemsCount: PropTypes.number,
    cartTotal: PropTypes.number,
    currency: PropTypes.string
};

export default withRouter(CSSModules(AppNav, styles, { allowMultiple: true }));
