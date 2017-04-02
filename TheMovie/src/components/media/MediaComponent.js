import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView, TouchableOpacity, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width

import MediaPlayer from 'react-native-android-video-player'

const wid = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class MediaComponent extends Component {

  render() {
    return (
        <MediaPlayer
            style={styles.vContainer}
            uri={"https://www.youtube.com/watch?v=aRd3_E2j4Q0&list=PLshdtb5UWjSp0879mLeCsDQN6L73XBZTk"}
        />
      );
  }
}

const styles = StyleSheet.create({
  vContainer: {
    height: height - 100,
    width: wid,
  }
});

module.exports = MediaComponent