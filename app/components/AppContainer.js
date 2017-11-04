import { connect } from 'react-redux';

import App from './App';
import { getProductsList } from '../selectors/Selectors';

const mapStateToProps = state => ({
    productsList: getProductsList(state)
});

export default connect(mapStateToProps, null)(App);
