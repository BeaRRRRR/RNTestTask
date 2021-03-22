/* eslint-disable no-param-reassign */
// Immer allows us to modify state directly
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createReducer, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { authEmailSignUpAsync, authEmailLoginAsync } from 'store/actions/auth';

export type State = {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  error: Error | null;
};

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

function emailSignUpReducer(builder: ActionReducerMapBuilder<State>) {
  builder.addCase(authEmailSignUpAsync.request, (state) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(authEmailSignUpAsync.success, (state, action) => {
    state.user = action.payload;
    state.error = null;
    state.loading = false;
  });
  builder.addCase(authEmailSignUpAsync.failed, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  });
}

function emailLoginReducer(builder: ActionReducerMapBuilder<State>) {
  builder.addCase(authEmailLoginAsync.request, (state) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(authEmailLoginAsync.success, (state, action) => {
    state.user = action.payload;
    state.loading = false;
    state.error = null;
  });
  builder.addCase(authEmailLoginAsync.failed, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
}

const authReducer = createReducer(initialState, (builder) => {
  /* In a real project I'd probably take some more time
       and find a nicer way of combining reducers in redux-toolkit, this is just
       what I've came up with at the top of my head
    */
  emailSignUpReducer(builder);
  emailLoginReducer(builder);
});

export default authReducer;
