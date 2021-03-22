import { createAction } from '@reduxjs/toolkit';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  AUTH_EMAIL_SIGN_UP_REQUEST,
  AUTH_EMAIL_SIGN_UP_SUCCESS,
  AUTH_EMAIL_SIGN_UP_FAILED,
  AUTH_EMAIL_LOGIN_REQUEST,
  AUTH_EMAIL_LOGIN_SUCCESS,
  AUTH_EMAIL_LOGIN_FAILED,
} from 'store/actions/actionTypes';
import { AuthEmailPayload } from 'types/interfaces/auth';

const authEmailSignUpRequest = createAction<AuthEmailPayload>(
  AUTH_EMAIL_SIGN_UP_REQUEST,
);
const authEmailSignUpSuccess = createAction<FirebaseAuthTypes.User>(
  AUTH_EMAIL_SIGN_UP_SUCCESS,
);
const authEmailSignUpFailed = createAction<Error>(AUTH_EMAIL_SIGN_UP_FAILED);
export const authEmailSignUpAsync = {
  request: authEmailSignUpRequest,
  success: authEmailSignUpSuccess,
  failed: authEmailSignUpFailed,
};

const authEmailLoginRequest = createAction<AuthEmailPayload>(
  AUTH_EMAIL_LOGIN_REQUEST,
);
const authEmailLoginSuccess = createAction<FirebaseAuthTypes.User>(
  AUTH_EMAIL_LOGIN_SUCCESS,
);
const authEmailLoginFailed = createAction<Error>(AUTH_EMAIL_LOGIN_FAILED);
export const authEmailLoginAsync = {
  request: authEmailLoginRequest,
  success: authEmailLoginSuccess,
  failed: authEmailLoginFailed,
};
