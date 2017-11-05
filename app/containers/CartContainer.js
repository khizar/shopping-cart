import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';
import * as Selectors from '../redux/selectors/Selectors';

const mapStateToProps = state => ({
    itemsInCart: Selectors.getAllItemsInCart(state)
});

export default connect(mapStateToProps, null)(Cart);
