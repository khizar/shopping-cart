import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

import ProductsList from "../constants/ProductsList";

const INITIAL_STATE = Immutable({
    products: ProductsList
});

export default handleActions(
    {
        SET_IS_TEST: (state, action) => {
            return state.set('isTest', action.payload);
        }
    },
    INITIAL_STATE
);
