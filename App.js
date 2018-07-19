
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigator from './src/navigators/app.navigator';


export default class App extends Component {

  componentDidMount() {
    // for debug purpose
    console.log(`App.js : componentDidMount()`)
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}


