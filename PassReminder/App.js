import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/reducers';
import Nav from "./src/routes";
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="#000" />
          <Nav />
        </PersistGate>
      </Provider>
    );
  }
}