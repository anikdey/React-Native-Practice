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
  TouchableHighlight,
  ListView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

var movieList = [
    { "title": "Star Wars", "releaseYear": "1977"},
    { "title": "Back to the Future", "releaseYear": "1985"},
    { "title": "The Matrix", "releaseYear": "1999"},
    { "title": "Inception", "releaseYear": "2010"},
    { "title": "Interstellar", "releaseYear": "2014"}
  ];




var backgroundTasks = require("background-tasks");
backgroundTasks.doInBackground(function() {
    // my JS code here
    // return data;
}).then(function(data){
    // data = result that you return from callback above
}).catch(function(exception) {
    // exception = native exception or exception that you throw in callback
});





class MyNetworkComponent extends Component {

  constructor(props) {
    super(props);

var move = fetch("https://facebook.github.io/react-native/movies.json", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {

              var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
              this.state = {
                movieDataSource : ds.cloneWithRows(responseData.movies),
                userName : "",
                password : ""
              }


            console.log("Hello Anik");
            console.log(responseData.movies);
            return responseData.movies;
        })
        .done();

console.log(move);

/*
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      movieDataSource : ds.cloneWithRows(move),
      userName : "",
      password : ""
    }
    */
  }

  render() {
    return (
      <View style={styles.container}>

          <TouchableHighlight onPress={this._onPressButton}>
            <Image
              style={{width: 50, height: 50, marginBottom: 10}}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            />
          </TouchableHighlight>

          <Button 
            style={styles.button, styles.loginText}
            title="Get Data"
            onPress={this._onPressButton.bind(this)}
          >
          </Button>

          <ListView 
            dataSource = {this.state.movieDataSource}
            renderRow = {(movie) => {return this.renderMovieRow(movie) }}>
          </ListView>
      </View>
    );
  }

  renderMovieRow(movie) {
      return(<TouchableOpacity>
        <Text style={{height: 40}}>Name: {movie.title}, Year:  {movie.releaseYear}
        </Text>
      </TouchableOpacity>);
  }


_onPressButton() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        movieList: responseJson.movies
      });
      var myString = "";
      movieList.map(function(movie){
          myString += movie.title+", ";
      });
      Alert.alert(""+myString);
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });  
}

 _handlePress(event) {
    console.log(this.getMoviesFromApiAsync());
    Alert.alert("Hello" + movieList);
  }

 getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        movieList = responseJson.movies
        return movieList;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

module.exports = MyNetworkComponent

