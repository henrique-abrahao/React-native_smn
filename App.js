import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Mid from './src/views/Mid'
import Login from './src/views/Login'
import Inicio from './src/views/Inicio'


const MidScreen = createStackNavigator({
  MidScreen: {
    screen: Mid,
    navigationOptions: {
      header: null,
    },
  },
  InicioScreen: {
    screen: Inicio,
    navigationOptions: {
      header: null,
    },
  },
},
  {
    initialRouteName: 'MidScreen',
    headerMode: 'none'
  }
);

const App = createAppContainer(MidScreen);

export default App;

