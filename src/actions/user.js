import {
  USER_REQUESTED,
  USER_SUCCEDED,
  USER_FAILED,
} from '../constants/actionTypes/user';
import getUser from '../services/api/getUser';

// Create action of specific type expected by execService saga.
export const handleUserRequest = () => ({
  type: USER_REQUESTED,
  resultTypes: [USER_SUCCEDED, USER_FAILED],
  service: getUser,
});
