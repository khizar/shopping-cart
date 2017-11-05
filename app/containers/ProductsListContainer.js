import { connect } from 'react-redux';

import ProductList from '../components/ProductsListing/ProductsList';
import { addItemToCart } from '../redux/actions/CartActions';
import * as Selectors from '../redux/selectors/Selectors';

const mapStateToProps = state => ({
    currency: Selectors.getCurrency(state),
    productsList: Selectors.getProductsList(state)
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: id => {
        dispatch(addItemToCart(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
