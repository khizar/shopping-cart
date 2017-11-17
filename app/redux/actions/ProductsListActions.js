import { createAction } from 'redux-actions';
import { getProductsList } from '../selectors/Selectors';

const _setProductsList = createAction('SET_PRODUCTS', products => products);
const _resetProducts = createAction('RESET_PRODUCTS_LIST');
const _saveSearchHistory = createAction('SAVE_SEARCH_HISTORY', query => query);

export const searchProducts = query => (dispatch, getState) => {
    if (!query) {
        dispatch(_resetProducts());
        return;
    }
    const state = getState();
    const products = getProductsList(state);
    const filteredList = products.filter(product => {
        return product.name.includes(query);
    });
    dispatch(_saveSearchHistory(query));
    dispatch(_setProductsList(filteredList));
};
