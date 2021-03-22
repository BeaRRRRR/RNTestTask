import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC2R2n0kWdz0rWsS4o4O3zY9K7fQUTypjg',
  authDomain: 'rntesttask.firebaseapp.com',
  databaseURL:
    'https://rntesttask-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'rntesttask',
  storageBucket: 'rntesttask.appspot.com',
  messagingSenderId: '348065281549',
  appId: '1:348065281549:web:21687f013ae2bd065f0744',
  measurementId: 'G-M6YE6LQZB4',
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
