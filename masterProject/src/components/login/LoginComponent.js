/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'

export default class LoginComponent extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContaier}>
              <Image 
                style={styles.logo}
                source={require('../../images/octocat.png')}
              />
              <Text style={styles.title} >Login to start your session</Text>
          </View>

          <View style={styles.loginFormContaier}>
            <LoginForm />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContaier : {
    alignItems : 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  loginFormContaier: {

  },
  logo: {
    height: 100,
    width: 100
  },
  title : {
    width: 140,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10
  }

});

module.exports = LoginComponent