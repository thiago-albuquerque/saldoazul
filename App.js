import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

import {AuthProvider} from './src/contexts/auth';

import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#EFF3F6'} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
