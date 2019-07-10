import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux'; 
import {  createStore, compose, applyMiddleware } from 'redux'
import {name as appName} from './app.json';

import rootReducer from './src/Reducers/combineReducers'
import thunk from 'redux-thunk';


const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);