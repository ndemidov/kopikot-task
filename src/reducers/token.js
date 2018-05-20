import { combineReducers } from 'redux';
import createFetchStatus from './createFetchStatus';
import {
  TOKEN_REQUESTED,
  TOKEN_SUCCEDED,
  TOKEN_FAILED,
} from '../constants/actionTypes/token';

const info = (
  state = {
    token: null,
  },
  action,
) => {
  switch (action.type) {
    case TOKEN_SUCCEDED:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

const status = createFetchStatus([TOKEN_REQUESTED, TOKEN_SUCCEDED, TOKEN_FAILED]);

export default combineReducers({
  info,
  status,
});
