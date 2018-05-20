import { call, put, select } from 'redux-saga/effects';
import { sign } from '../services/request';

const getToken = state => state.token.info.token;

export default function* execService(action) {
  const { service, resultTypes: [successType, errorType] } = action;
  const token = yield select(getToken);

  // Sign every request with token.
  const signedService = sign(service, token);

  try {
    const data = yield call(signedService);
    yield put({ type: successType, data });
  } catch (error) {
    yield put({ type: errorType, error });
  }
}
