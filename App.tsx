/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import ConfigSplashScreen from './src/config/splash-screen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ConfigSplashScreen>
        <Navigation />
      </ConfigSplashScreen>
    </Provider>
  )
}

export default App;
