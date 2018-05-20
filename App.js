import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Root from './src/containers/Root';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
