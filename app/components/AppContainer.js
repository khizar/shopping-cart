import {connect} from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
    productsList: state.testReducer.products
});

export default connect(mapStateToProps, null)(App);
