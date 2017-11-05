import { it, describe } from 'mocha';
import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import CartReducer from './CartReducer';
import * as Actions from './CartActions';

describe('CartReducer', () => {
    let INITIAL_STATE = {};
    beforeEach(() => {
        INITIAL_STATE = Immutable({
            itemsInCart: {
                // {id: {quantity, subTotal } }
            },
            totalCost: 0
        });
    });

    it('it should return same state if passed some action not handled', () => {
        const nextState = CartReducer(INITIAL_STATE, {});
        expect(nextState).to.equal(INITIAL_STATE);
    });

    it('SET_TO_CART: should set the passed values as cart item with id as key', () => {
        const cartItem = { id: 2, subTotal: 200, quantity: 1 };
        const nextState = CartReducer(
            INITIAL_STATE,
            Actions.privateActions.setItemToCart(cartItem)
        );
        const expectedNextState = {
            itemsInCart: {
                [cartItem.id]: {
                    quantity: cartItem.quantity,
                    subTotal: cartItem.subTotal
                }
            },
            totalCost: 0
        };

        expect(nextState).to.deep.equal(expectedNextState);
    });

    it('SET_TO_CART: should remove an item if the quantity passed in action is Zero', () => {
        const cartItem = { id: 2, subTotal: 200, quantity: 1 };
        const stateWithItem = CartReducer(
            INITIAL_STATE,
            Actions.privateActions.setItemToCart(cartItem)
        );
        const nextState = CartReducer(
            stateWithItem,
            Actions.privateActions.setItemToCart({ ...cartItem, quantity: 0 })
        );
        const expectedNextState = {
            itemsInCart: {},
            totalCost: 0
        };

        expect(nextState).to.deep.equal(expectedNextState);
    });

    it('SET_CART_TOTAL: should set the passed value as totalCost in state', () => {
        const totalCost = 200;
        const nextState = CartReducer(
            INITIAL_STATE,
            Actions.privateActions.setTotalToCart(totalCost)
        );
        const expectedNextState = {
            ...INITIAL_STATE,
            totalCost
        };

        expect(nextState).to.deep.equal(expectedNextState);
    });
});
