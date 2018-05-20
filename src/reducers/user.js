import { combineReducers } from 'redux';
import createFetchStatus from './createFetchStatus';
import {
  USER_REQUESTED,
  USER_SUCCEDED,
  USER_FAILED,
} from '../constants/actionTypes/user';

const info = (
  state = {},
  action,
) => {
  switch (action.type) {
    case USER_SUCCEDED:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

const status = createFetchStatus([USER_REQUESTED, USER_SUCCEDED, USER_FAILED]);

export default combineReducers({
  info,
  status,
});
