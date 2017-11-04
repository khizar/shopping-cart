import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = Immutable({
    itemsInCart: {
        // {id, quantity, subTotal}
    },
    totalCost: 0
});

export default handleActions(
    {
        SET_TO_CART: (state, action) => {
            const { id, subTotal, quantity } = action.payload;
            if (quantity === 0) {
                const itemsListWithoutThisItem = state.itemsInCart.without(id);
                state.set('itemsInCart', itemsListWithoutThisItem);
            }
            return state.setIn(['itemsInCart', id], { subTotal, quantity });
        },
        SET_CART_TOTAL: (state, action) => {
            return state.set('totalCost', action.payload);
        }
    },
    INITIAL_STATE
);
