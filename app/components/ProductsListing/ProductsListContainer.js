import { connect } from 'react-redux';

import ProductList from './ProductsList';
import { addItemToCart } from '../Cart/CartActions';
import * as Selectors from '../../selectors/Selectors';

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
