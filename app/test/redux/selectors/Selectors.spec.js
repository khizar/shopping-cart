import { it, describe } from 'mocha';
import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import * as Selectors from '../../../redux/selectors/Selectors';
import ProductsList from '../../../constants/ProductsList';

describe('Selectors.js', () => {
    let state = {};
    beforeEach(() => {
        state = Immutable({
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
            products: { productsList: ProductsList, currency: 'euro' } // importing is easy and clean, reusing
        });
    });

    it('getProductsList: gets the list of products in state', () => {
        const expectedResult = ProductsList;
        const selectedState = Selectors.getProductsList(state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getProductDetailsById: gets the details of product in state by id', () => {
        //copied from ProductsList constants file which is being used as mock data as well
        const expectedResult = {
            id: 0,
            name: 'JAX - sneaker',
            price: 99,
            image:
                'https://mosaic01.ztat.net/vgs/media/catalog2_hd/QU/14/2C/02/9Q/11/QU142C029-Q11@12.1.jpg',
            description:
                'Quicksilver - Sneaker high. You wont find a better sneaker, not for this price. It a bet!!'
        };
        const selectedState = Selectors.getProductDetailsById(0, state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getItemInCartById: gets the item in cart by id', () => {
        const expectedResult = {
            quantity: 1,
            subTotal: 65.5
        };
        const selectedState = Selectors.getItemInCartById(1, state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getCurrency: gets the currency in state', () => {
        const expectedResult = 'euro';
        const selectedState = Selectors.getCurrency(state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getNumberOfItemsInCart: gets number of items in cart', () => {
        const expectedResult = 3;
        const selectedState = Selectors.getNumberOfItemsInCart(state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getAllItemsInCart: gets all items in cart', () => {
        const expectedResult = state.cart.itemsInCart;
        const selectedState = Selectors.getAllItemsInCart(state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('getCartTotal: get total cost set in cart', () => {
        const expectedResult = state.cart.totalCost;
        const selectedState = Selectors.getCartTotal(state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });

    it('calculateTotalWithoutCurrentItem: calculate total costs of all items except one in cart', () => {
        const expectedResult = 175.5;
        const selectedState = Selectors.calculateTotalWithoutCurrentItem(2, state);

        expect(selectedState).to.be.deep.equal(expectedResult);
    });
});
