import { createAction } from 'redux-actions';

import * as Selectors from './../../selectors/Selectors';

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

    let cartTotalWithoutCurrentItem = calculateTotalExceptCurrentItem(productId, state);
    dispatch(_setItemToCart(newCartItem));
    dispatch(_setTotalToCart(cartTotalWithoutCurrentItem + newCartItem.subTotal));
};

export const deleteItem = itemId => (dispatch, getState) => {
    const state = getState();
    const item = Selectors.getProductInCartById(itemId, state);

    const newTotalAfterDeletion = calculateTotalExceptCurrentItem(itemId, state);

    dispatch(_setItemToCart({ id: itemId, quantity: 0 }));
    dispatch(_setTotalToCart(newTotalAfterDeletion));
};

const calculateTotalExceptCurrentItem = (currentItemId, state) => {
    const allItemsInCart = Selectors.getAllItemsInCart(state);
    let cartTotalWithoutCurrentItem = 0;
    Object.keys(allItemsInCart).map(key => {
        if (Number(key) !== Number(currentItemId)) {
            cartTotalWithoutCurrentItem += allItemsInCart[key].subTotal;
        }
    });
    return cartTotalWithoutCurrentItem;
};
