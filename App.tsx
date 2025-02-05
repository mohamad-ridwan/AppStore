/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ConfigSplashScreen from './src/config/splash-screen';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App(): React.JSX.Element {
  ConfigSplashScreen()

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;
