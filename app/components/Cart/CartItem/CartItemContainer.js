import { connect } from 'react-redux';

import CartItem from './CartItem';
import * as Selectors from '../../../selectors/Selectors';
import { deleteItem } from '../CartActions';

const mapStateToProps = (state, ownProps) => ({
    product: Selectors.getProductDetailsById(ownProps.itemId, state),
    cartItem: Selectors.getProductInCartById(ownProps.itemId, state),
    currency: Selectors.getCurrency(state)
});

const mapDispatchToProps = dispatch => ({
    deleteItem: id => {
        dispatch(deleteItem(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
