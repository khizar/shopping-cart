import { connect } from 'react-redux';

import CartItem from './CartItem';
import * as Selectors from '../../../selectors/Selectors';

const mapStateToProps = (state, ownProps) => ({
    product: Selectors.getProductDetailsById(ownProps.itemId, state),
    cartItem: Selectors.getProductInCartById(ownProps.itemId, state),
    currency: Selectors.getCurrency(state)
});

export default connect(mapStateToProps, null)(CartItem);
