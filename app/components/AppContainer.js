import { connect } from 'react-redux';

import App from './App';
import * as Selectors from '../selectors/Selectors';

const mapStateToProps = state => ({
    productsList: Selectors.getProductsList(state),
    cartItemsCount: Selectors.getNumberOfItemsInCart(state),
    cartTotal: Selectors.getCartTotal(state),
    currency: Selectors.getCurrency(state)
});

export default connect(mapStateToProps, null)(App);
