import React from 'react';
import configureStore from './src/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
