/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  Alert,
  TextInput,
  Image,
  View
} from 'react-native';

class LoginComponent extends Component {

  constructor() {
    super();
    this.state = {
      userName : "",
      password : ""
    }
  }


  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{width: 50, height: 50, marginBottom: 10}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <Image
            style={styles.userImage}
            source={require('../images/user.png')}
          />
          <TextInput 
            placeholder="Username" 
            style={styles.searchInput}
            onChangeText={(userName) => this.setState({userName})}
          />
          <TextInput 
            placeholder="Password" 
            style={styles.searchInput}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
          <Button 
            style={styles.button, styles.loginText}
            title="Login"
            onPress={this._handlePress.bind(this)}
          >
          </Button>
      </View>
    );
  }

 _handlePress(event) {
    var userName = this.state.userName;
    var password = this.state.password;
    Alert.alert("Username :" + userName + "\nPassword : " +password);
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  userImage : {
    height: 100,
    width: 100,
    marginBottom: 10,
  },

  searchInput: {
    height: 50,
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    color: "black",
    borderColor: '#48BBEC',
    marginBottom: 10,
  },
  loginText : {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
  button : {
    height: 40,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    width: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

module.exports = LoginComponent

