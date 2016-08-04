import { createAction } from 'redux-actions';
import Session from '../utils/Session';

export const postSession = createAction('POST_SESSION', Session.postSession);
export const deleteSession = createAction('DELETE_SESSION', Session.deleteSession);
export const setSessionByLocalStorage = createAction('SET_SESSION_BY_LOCALSTORAGE');
