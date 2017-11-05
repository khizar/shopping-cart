import { it, describe } from 'mocha';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Immutable from 'seamless-immutable';

import * as Actions from '../../../redux/actions/CartActions';
import ProductsList from '../../../constants/ProductsList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//only testing thunks because the other actions are made using redux-actions and
//that would mean testing the library

describe('CartActions.js', () => {
    let mockStoreState;
    beforeEach(() => {
        mockStoreState = Immutable({
            cart: {
                itemsInCart: {
                    1: {
                        quantity: 1,
                        subTotal: 65.5
                    },
                    2: {
                        quantity: 1,
                        subTotal: 200
                    },
                    3: {
                        quantity: 1,
                        subTotal: 110
                    }
                },
                totalCost: 375.5
            },
            products: { productsList: ProductsList } // importing is easy and clean, reusing
        });
    });

    it('addItemToCart: should return a function', () => {
        expect(Actions.addItemToCart()).to.be.a('function');
    });

    it('addItemToCart: should fire the correct actions with correct data', () => {
        const expectedActions = [
            Actions.privateActions.setItemToCart({ id: 2, quantity: 2, subTotal: 400 }),
            Actions.privateActions.setTotalToCart(575.5)
        ];

        const store = mockStore(mockStoreState);
        store.dispatch(Actions.addItemToCart(2));

        expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('deleteItem: should return a function', () => {
        expect(Actions.deleteItem()).to.be.a('function');
    });

    it('deleteItem: should fire the correct actions with correct data', () => {
        const expectedActions = [
            Actions.privateActions.setItemToCart({ id: 3, quantity: 0, subTotal: 0 }),
            Actions.privateActions.setTotalToCart(265.5)
        ];

        const store = mockStore(mockStoreState);
        store.dispatch(Actions.deleteItem(3));

        expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('decrementItemQuantity: should return a function', () => {
        expect(Actions.decrementItemQuantity()).to.be.a('function');
    });

    it('decrementItemQuantity: should fire the correct actions with correct data', () => {
        const expectedActions = [
            Actions.privateActions.setItemToCart({ id: 3, quantity: 0, subTotal: 0 }),
            Actions.privateActions.setTotalToCart(265.5)
        ];

        const store = mockStore(mockStoreState);
        store.dispatch(Actions.decrementItemQuantity(3));

        expect(store.getActions()).to.deep.equal(expectedActions);
    });
});
