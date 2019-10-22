import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Nav from "./src/routes";

export default class App extends Component {
  
  store = createStore(reducers, applyMiddleware(ReduxThunk))

  render() {
    return (
      <Provider store={this.store}>
        <StatusBar backgroundColor="#000" />
        <Nav />
      </Provider>
    );
  }
}