import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/AppContainer';
import CreateStore from './CreateStore';
import RootReducer from './RootReducer';

const store = CreateStore(RootReducer);
if (module.hot) {
    module.hot.accept('./RootReducer', () => {
        const nextRootReducer = require('./RootReducer').default;
        store.replaceReducer(nextRootReducer);
    });
}

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <AppContainer>
                    <Component />
                </AppContainer>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/AppContainer', () => {
        const NextApp = require('./containers/AppContainer').default;
        render(NextApp);
    });
}
