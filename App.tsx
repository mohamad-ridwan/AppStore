/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ConfigSplashScreen from './src/config/splash-screen';
import Navigation from './src/navigation';

function App(): React.JSX.Element {
  ConfigSplashScreen()

  return <Navigation />
}

export default App;
