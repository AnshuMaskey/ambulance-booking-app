import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './navigations/MainNavigator';
import LoginProvider from './context/LoginProvider';
import {store} from "./redux/store";

export default function App() {
  return (
    <LoginProvider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

