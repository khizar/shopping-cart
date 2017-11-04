import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import { CART_ROUTE, HOME_ROUTE } from '../constants/MIscellenousConstants';
import styles from './App.pcss';

const AppNav = props => (
    <section styleName="app__cart-view">
        <label>
            Items in cart: <b>{props.cartItemsCount}</b>
        </label>
        <section styleName="app__cart-details">
            <label>
                Cart Total: <b>{`${props.cartTotal} ${props.currency}`}</b>
            </label>

            {props.location.pathname === HOME_ROUTE && (
                <Link to={CART_ROUTE} styleName="app__nav-link">
                    view cart
                </Link>
            )}

            {props.location.pathname === CART_ROUTE && (
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
