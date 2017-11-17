import { connect } from 'react-redux';

import App from '../components/App/App';
import * as Selectors from '../redux/selectors/Selectors';
import * as Actions from '../redux/actions/CartActions';
import { searchProducts } from '../redux/actions/ProductsListActions';

const mapStateToProps = state => ({
    cartItemsCount: Selectors.getNumberOfItemsInCart(state),
    cartTotal: Selectors.getCartTotal(state),
    currency: Selectors.getCurrency(state)
});
const mapDispatchToProps = dispatch => ({
    emptyCart: () => {
        dispatch(Actions.emptyCart());
    },
    searchProducts: query => {
        console.log('query' + query);
        dispatch(searchProducts(query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
