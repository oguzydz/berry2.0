import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import 'react-native-gesture-handler';

import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { AppContainer } from './src/navigation/index'


import { setDeviceAndUserAuth } from "./src/firebase/functionsControl";


export default class App extends Component {

  componentDidMount = () => {
    setDeviceAndUserAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}
