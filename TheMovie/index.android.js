import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

var SplashScreen = require('@remobile/react-native-splashscreen');
import MediaComponent from './src/components/media/MediaComponent'
import Router from './src/Router'
export default class TheMovie extends Component {

  componentDidMount() {
        SplashScreen.hide();
    }
  render() {
    return (
        <Router />
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
});

AppRegistry.registerComponent('TheMovie', () => TheMovie);