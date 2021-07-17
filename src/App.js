import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {CineProvider} from './services/Contexts/CineContext';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <CineProvider>
        <Routes />
      </CineProvider>
    </NavigationContainer>
  );
}
