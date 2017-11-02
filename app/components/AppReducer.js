import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = Immutable({
    isTest: false
});

export default handleActions(
    {
        SET_IS_TEST: (state, action) => {
            return state.set('isTest', action.payload);
        }
    },
    INITIAL_STATE
);
