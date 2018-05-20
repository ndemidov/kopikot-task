import { call, put } from 'redux-saga/effects';
import { TOKEN_SUCCEDED, TOKEN_FAILED } from '../constants/actionTypes/token';
import getToken from '../services/api/getToken';

export default function* fetchToken() {
  try {
    const data = yield call(getToken);
    yield put({ type: TOKEN_SUCCEDED, ...data });
  } catch (error) {
    yield put({ type: TOKEN_FAILED, error });
  }
}
