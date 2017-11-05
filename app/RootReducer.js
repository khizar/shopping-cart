import { combineReducers } from 'redux';

import ProductsReducer from './redux/reducers/ProductsListReducer';
import CartReducer from './redux/reducers/CartReducer';

const RootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
});

export default RootReducer;
