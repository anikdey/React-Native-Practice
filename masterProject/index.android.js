/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginComponent from './src/components/login/LoginComponent'
import CameraComponent from './src/components/camera/CameraComponent'
import TabViewExample from './src/components/tabview/TabViewExample'
import ModalComponent from './src/components/builtin/ModalComponent'

export default class masterProject extends Component {
  render() {
    return (
        <ModalComponent />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('masterProject', () => masterProject);