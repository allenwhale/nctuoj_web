import {
    handleActions
} from 'redux-actions';
import Config from './Config';
import swal from 'sweetalert';

const initialState = {};


export default handleActions({
    POST_SESSION: {
        next(state, action){
            localStorage.setItem("session", JSON.stringify(action.payload.msg));
            return action.payload.msg;
        },
        throw(state, action){
            swal('SignIn Error', action.payload.msg, 'error');
        }
    },
    DELETE_SESSION: (state, action) => {
        localStorage.clear();
        return {};
    },
    SET_SESSION_BY_LOCALSTORAGE: {
        next(state, action){
            var session = localStorage.getItem('session');
            if(session == null)
                session = {};
            else
                session = JSON.parse(session);
            return session;
        },
        throw(state, action){
            swal('SignIn Error', action.payload.msg, 'error');
        }
    },
}, initialState);
