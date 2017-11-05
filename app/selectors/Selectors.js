export function getProductsList(state) {
    return state.products.productsList;
}

export function getProductDetailsById(id, state) {
    return state.products.productsList.find(product => {
        return Number(product.id) === Number(id);
    });
}

export function getItemInCartById(id, state) {
    return state.cart.itemsInCart[id];
}

export function getCurrency(state) {
    return state.products.currency;
}

export function getNumberOfItemsInCart(state) {
    return Object.keys(state.cart.itemsInCart).length;
}

export function getAllItemsInCart(state) {
    return state.cart.itemsInCart;
}

export function getCartTotal(state) {
    return state.cart.totalCost;
}

export function calculateTotalWithoutCurrentItem(currentItemId, state) {
    const allItemsInCart = getAllItemsInCart(state);
    let cartTotalWithoutCurrentItem = 0;
    Object.keys(allItemsInCart).map(key => {
        if (Number(key) !== Number(currentItemId)) {
            cartTotalWithoutCurrentItem += allItemsInCart[key].subTotal;
        }
    });
    return cartTotalWithoutCurrentItem;
}
