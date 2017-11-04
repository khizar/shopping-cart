import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { addItemToCart } from '../../Cart/CartActions';
import { getCurrency, getProductsList } from '../../../selectors/Selectors';

const mapStateToProps = state => ({
    currency: getCurrency(state)
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: id => {
        dispatch(addItemToCart(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
