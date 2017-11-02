import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.pcss';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <label styleName="main">hello flexbox</label>
            </div>
        );
    }
}

export default CSSModules(App, styles, { allowMultiple: true });
