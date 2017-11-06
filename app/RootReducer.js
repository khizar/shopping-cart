import { combineReducers } from 'redux';

import ProductsReducer from './redux/reducers/ProductsListReducer';
import CartReducer from './redux/reducers/CartReducer';

const appReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
});

const RootReducer = (state, action) => {
    if (action.type === 'EMPTY_CART') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default RootReducer;
