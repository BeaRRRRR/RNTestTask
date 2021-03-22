import Reactotron, { asyncStorage, networking } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(networking())
  .use(asyncStorage())
  .use(sagaPlugin()) // Allow reactotron to show redux store
  .useReactNative() // add all built-in react native plugins
  .connect();

const sagaMonitor = Reactotron.createSagaMonitor();

export default sagaMonitor;
