import { RootState } from 'types/types';

export const getUser = (state: RootState) => state.auth.user;
export const getLoading = (state: RootState) => state.auth.loading;
export const getAuthError = (state: RootState) => state.auth.error;
