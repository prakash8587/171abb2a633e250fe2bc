import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screen/Login/Login';
import Dashboard from '../screen/Dashboard/Dashboard';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Dashboard: {screen: Dashboard},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
