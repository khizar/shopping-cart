import { connect } from 'react-redux';

import CartItem from './CartItem';
import * as Selectors from '../../../selectors/Selectors';
import { addItemToCart, decrementItemQuantity, deleteItem } from '../CartActions';

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
