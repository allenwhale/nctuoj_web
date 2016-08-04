import {
    handleActions
} from 'redux-actions';

const initialState = 0;

export default handleActions({
    LOGIN_REGISTER_SELECT: (state, action) => {
        return action.payload;
    },
}, initialState);

