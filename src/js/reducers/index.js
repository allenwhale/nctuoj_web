import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import session from './Session';
import loginRegister from './LoginRegister';

export default combineReducers({
    routing,
    session,
    loginRegister,
});
