export const searchHistoryMiddleWare = store => next => action => {
    if (action.type === 'SAVE_SEARCH_HISTORY') {
        console.log('Middleware triggered:', action.payload);
        localStorage.setItem('lastSearch', action.payload);
    }
    next(action);
};
