import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchHistoryMiddleWare } from './redux/middleware/SearchHistory';

export default rootReducer => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- Redux thunk Middleware ------------- */

    middleware.push(thunkMiddleware);
    middleware.push(searchHistoryMiddleWare);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */

    const store = createStore(rootReducer, composeEnhancers(...enhancers));

    return store;
};
