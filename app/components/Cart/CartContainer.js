import { connect } from 'react-redux';

import Cart from './Cart';
import * as Selectors from '../../selectors/Selectors';

const mapStateToProps = state => ({
    itemsInCart: Selectors.getAllItemsInCart(state)
});

export default connect(mapStateToProps, null)(Cart);
