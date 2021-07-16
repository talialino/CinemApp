import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {CineProvider} from './state/contexts/auth';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      {/* <CineProvider> */}
      <Routes />
      {/* </CineProvider> */}
    </NavigationContainer>
  );
}
