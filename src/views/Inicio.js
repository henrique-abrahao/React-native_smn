import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import ListaTel from './ListaTel';
import Inserir from './Inserir';
import Home from './Home';
import Login from './Login'
import AsyncStorage from '@react-native-community/async-storage';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../../assets/menu.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class logOut extends Component {
  logOut = () => {
    AsyncStorage.clear();
  }
  componentWillMount() {
    this.logOut();
  }
  render() {
    return <Login />
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4c5f68',
      },
      headerTintColor: '#fff',
    }),
  },
});



const Screen2_StackNavigator = createStackNavigator({

  ListaTel: {
    screen: ListaTel,
    navigationOptions: ({ navigation }) => ({
      title: 'Contatos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#4c5f68',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({

  InserirCont: {
    screen: Inserir,
    navigationOptions: ({ navigation }) => ({
      title: 'Inserir Contatos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4c5f68',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },

  ListaTel: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contatos',
    },
  },

  Inserir: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Inserir Dados',
    },
  },

  LogOut: {
    screen: logOut,
    navigationOptions: {
      drawerLabel: 'Sair',
    },
  }
}
);

export default createAppContainer(DrawerNavigator);
