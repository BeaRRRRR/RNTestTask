import { call, put, takeEvery } from 'redux-saga/effects';
import { authEmailSignUpAsync, authEmailLoginAsync } from 'store/actions/auth';
import { rsf } from 'utils/firebase';

function* emailSignUpSaga({
  payload,
}: ReturnType<typeof authEmailSignUpAsync.request>) {
  try {
    const { email, password } = payload;
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password,
    );
    yield put(authEmailSignUpAsync.success(user));
  } catch (error) {
    yield put(authEmailSignUpAsync.failed(error));
  }
}

function* emailLoginSaga({
  payload,
}: ReturnType<typeof authEmailLoginAsync.request>) {
  try {
    const { email, password } = payload;
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password,
    );
    yield put(authEmailLoginAsync.success(data));
  } catch (error) {
    yield put(authEmailLoginAsync.failed(error));
  }
}

const rootSaga = [
  takeEvery(authEmailSignUpAsync.request, emailSignUpSaga),
  takeEvery(authEmailLoginAsync.request, emailLoginSaga),
];

export default rootSaga;
