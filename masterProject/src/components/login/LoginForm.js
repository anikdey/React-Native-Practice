/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.container}>
          <View style={styles.container}>
              <StatusBar
                barStyle="light-content"
               />
              <TextInput
                placeholder="Email or username"
                returnKeyType='next'
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={ () => this.passwordInput.focus() }
                placeholderTextColor='rgba(255, 255, 255, .7)'
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                placeholderTextColor='rgba(255, 255, 255, .7)'
                style={styles.input}
                returnKeyType='go'
                ref={ (input) => this.passwordInput = input }
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }, 
  input: {
    height: 40,
    backgroundColor : 'rgba(255, 255, 255, .2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
    fontWeight: '700'
  }

});

module.exports = LoginForm