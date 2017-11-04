import { createAction } from 'redux-actions';

import * as Selectors from './../../selectors/Selectors';

const _setToCart = createAction('SET_TO_CART', ({ id, subTotal, quantity }) => ({
    id,
    subTotal,
    quantity
}));

export const addItemToCart = productId => (dispatch, getState) => {
    const state = getState();
    const productInInventory = Selectors.getProductDetailsById(productId, state);
    console.log(productInInventory);

    if (!productInInventory) {
        console.log('Product not available!');
        return;
    }

    const productInCart = Selectors.getProductInCartById(productId, state);
    let quatityInCart = productInCart ? productInCart.quantity : 0;
    const price = productInInventory.price;
    const newItem = { id: productId, quantity: ++quatityInCart, subTotal: quatityInCart * price };
    console.log(newItem);
    dispatch(_setToCart(newItem));
};
