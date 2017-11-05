import { connect } from 'react-redux';

import App from '../components/App/App';
import * as Selectors from '../redux/selectors/Selectors';

const mapStateToProps = state => ({
    cartItemsCount: Selectors.getNumberOfItemsInCart(state),
    cartTotal: Selectors.getCartTotal(state),
    currency: Selectors.getCurrency(state)
});

export default connect(mapStateToProps, null)(App);
