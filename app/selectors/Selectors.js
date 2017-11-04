export function getProductsList(state) {
    return state.products.productsList;
}

export function getProductDetailsById(id, state) {
    return state.products.productsList.find(product => {
        return product.id === id;
    });
}

export function getProductInCartById(id, state) {
    return state.cart.itemsInCart[id];
}

export function getCurrency(state) {
    return state.products.currency;
}
