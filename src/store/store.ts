import { configureStore } from '@reduxjs/toolkit';

import reducer from 'store/reducers';
import rootSaga from 'store/sagas';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from 'utils/reactotron';

const middleware = [];

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
