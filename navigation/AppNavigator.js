import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddScreen: AddScreen
});

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
  Main: HomeStack
});
