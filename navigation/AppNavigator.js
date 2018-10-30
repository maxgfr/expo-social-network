import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddScreen: AddScreen
});

export default createSwitchNavigator({
  Main: HomeStack
});
