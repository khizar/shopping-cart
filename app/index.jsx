import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/AppContainer';
import CreateStore from './CreateStore';
import RootReducer from './RootReducer';

const store = CreateStore(RootReducer);
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
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
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <AppContainer>
                        <NextApp />
                    </AppContainer>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });
}
