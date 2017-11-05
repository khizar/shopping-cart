import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

import ProductsList from '../../constants/ProductsList';

const INITIAL_STATE = Immutable({
    productsList: ProductsList,
    currency: '€'
});

export default handleActions(
    {
        SET_CURRENCY: (state, action) => {
            return state.set('currency', action.payload);
        }
    },
    INITIAL_STATE
);
