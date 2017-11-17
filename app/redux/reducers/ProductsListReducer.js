import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

import ProductsList from '../../constants/ProductsList';

const INITIAL_STATE = Immutable({
    productsList: ProductsList,
    currency: '€'
});

export default handleActions(
    {
        SET_PRODUCTS: (state, action) => {
            const products = action.payload;
            // if(products.length < 1){
            //     return state.set('productsList', ProductsList);
            // }
            return state.set('productsList', products);
        },
        RESET_PRODUCTS_LIST: (state, action) => {
            return state.set('productsList', ProductsList);
        }
    },
    INITIAL_STATE
);
