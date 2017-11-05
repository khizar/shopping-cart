import { connect } from 'react-redux';

import CartItem from '../components/Cart/CartItem/CartItem';
import * as Selectors from '../redux/selectors/Selectors';
import { addItemToCart, decrementItemQuantity, deleteItem } from '../redux/actions/CartActions';

const mapStateToProps = (state, ownProps) => ({
    product: Selectors.getProductDetailsById(ownProps.itemId, state),
    cartItem: Selectors.getItemInCartById(ownProps.itemId, state),
    currency: Selectors.getCurrency(state)
});

const mapDispatchToProps = dispatch => ({
    deleteItem: id => {
        dispatch(deleteItem(id));
    },
    decrementItemQuantity: id => {
        dispatch(decrementItemQuantity(id));
    },
    incrementItemQuantity: id => {
        dispatch(addItemToCart(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
