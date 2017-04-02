/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import LoginComponent from './app/components/LoginComponent'
import MyNetworkComponent from './app/components/MyNetworkComponent'




export default class buttonApp extends Component {

  render() {
    return (
        <View></View>
    );
  }


}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('buttonApp', () => buttonApp);
