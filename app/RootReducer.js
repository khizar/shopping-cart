import { combineReducers } from 'redux';

import ProductsReducer from './components/ProductsListing/ProductsListReducer';
import CartReducer from './components/Cart/CartReducer';

const RootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
});

export default RootReducer;
