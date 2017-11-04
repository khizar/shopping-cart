import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Cart.pcss';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Cart</div>;
    }
}

Cart.propTypes = {};

export default CSSModules(Cart, styles, { allowMultiple: true });
