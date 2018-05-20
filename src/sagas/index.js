import { takeLatest, takeEvery } from 'redux-saga/effects';
import fetchToken from './token';
import execService from './execService';
import { TOKEN_REQUESTED } from '../constants/actionTypes/token';
import { USER_REQUESTED } from '../constants/actionTypes/user';

export default function* rootSaga() {
  yield takeLatest(TOKEN_REQUESTED, fetchToken);
  yield takeEvery(action => action.service, execService);
}
