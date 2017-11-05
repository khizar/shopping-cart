import { createAction } from 'redux-actions';

import * as Selectors from './../../selectors/Selectors';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const _setItemToCart = createAction('SET_TO_CART', ({ id, subTotal, quantity }) => ({
    id,
    subTotal,
    quantity
}));

const _setTotalToCart = createAction('SET_CART_TOTAL', total => total);

export const addItemToCart = productId => (dispatch, getState) => {
    const state = getState();
    const productInInventory = Selectors.getProductDetailsById(productId, state);

    if (!productInInventory) {
        //fire unsuccessful action
        console.log('Product not available!');
        return;
    }

    const productInCart = Selectors.getProductInCartById(productId, state);
    let quatityInCart = productInCart ? productInCart.quantity : 0;
    const price = productInInventory.price;
    const newCartItem = {
        id: productId,
        quantity: ++quatityInCart,
        subTotal: quatityInCart * price
    };

    let cartTotalWithoutCurrentItem = Selectors.calculateTotalWithoutCurrentItem(productId, state);
    dispatch(_setItemToCart(newCartItem));
    dispatch(_setTotalToCart(cartTotalWithoutCurrentItem + newCartItem.subTotal));
};

export const deleteItem = itemId => (dispatch, getState) => {
    const state = getState();

    const newTotalAfterDeletion = Selectors.calculateTotalWithoutCurrentItem(itemId, state);

    dispatch(_setItemToCart({ id: itemId, quantity: 0, subTotal: 0 }));
    dispatch(_setTotalToCart(newTotalAfterDeletion));
};

export const decrementItemQuantity = itemId => (dispatch, getState) => {
    const state = getState();
    const itemInCart = Selectors.getProductInCartById(itemId, state);
    const product = Selectors.getProductDetailsById(itemId, state);

    if (!itemInCart) {
        console.log('Item not in cart');
        return;
    }

    const newItemQuantiy = itemInCart.quantity - 1;
    const newSubTotal = newItemQuantiy * product.price;

    const totalAfterWithoutCurrentItem = Selectors.calculateTotalWithoutCurrentItem(itemId, state);
    const newItem = { id: itemId, quantity: newItemQuantiy, subTotal: newSubTotal };

    dispatch(_setItemToCart(newItem));
    dispatch(_setTotalToCart(totalAfterWithoutCurrentItem + newSubTotal));
};

// add private actions here for testing
let privateActions = {};
if (isTestEnvironment) {
    privateActions.setItemToCart = _setItemToCart;
    privateActions.setTotalToCart = _setTotalToCart;
}
export { privateActions };
