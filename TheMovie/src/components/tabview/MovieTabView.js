import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';


var API_URL = 'https://api.themoviedb.org/3/movie/';
var API_KEY = '950a4871cb7f9e9d06f1b23058dd0560';

const movies = [{ "original_title": "", "releaseYear": ""}];
var counter = 1;
const width = Dimensions.get('window').width

export default class MovieTabView extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
       nowPlayingMovieDataSource : ds.cloneWithRows(movies),
       topRatedMovieDataSource : ds.cloneWithRows(movies),
       upcomintMovieDataSource : ds.cloneWithRows(movies),
       index: 0,
       routes: [
          { key: '1', title: 'Playing' },
          { key: '2', title: 'Top Rated' },
          { key: '3', title: 'Upcoming' },
        ],
    }
  }

  componentWillMount() {
    fetch(API_URL+'now_playing?api_key='+API_KEY+'&page='+counter)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({nowPlayingMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
      });

    fetch(API_URL+'top_rated?api_key='+API_KEY+'&page=1')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({topRatedMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
      });

    fetch(API_URL+'upcoming?api_key='+API_KEY+'&page=1')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({upcomintMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
      });

  }



  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBarTop {...props} />;
  };

  renderMovieRow(movie) {
      return(<TouchableOpacity 
          onPress={ (event) => this._navigateToMovieDetails(movie)}
          style={styles.card}
        >
        <View
          style={styles.moviePoster}
        >
        <Image
          style={styles.moviePosterSize}
          source={{uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+movie.poster_path}}
        />
        </View>
      </TouchableOpacity>);
  }


  _navigateToMovieDetails(movie) {
      console.log(movie);
      this.props.navigator.push({
          name: "MovieDetails",
          title: 'Movie Details',
          movie: movie,
      })
  }

moviePager() {
    fetch(API_URL+'now_playing?api_key='+API_KEY+'&page=3')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({nowPlayingMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
      });
}


getInitialState() {
        return {
            isLoadingTail: false,
            ds: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

_onEndReached() {
    
    counter++;
  
    fetch(API_URL+'now_playing?api_key='+API_KEY+'&page='+counter)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({nowPlayingMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson.results;
          })
          .catch((error) => {
            console.error(error);
      });
        /* this.moviePager(); */
}


_onRefresh() {
  console.log("Up scroll");
}


  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View>
              <Image
                style={styles.backgroundImageStyle}
                source={require('../../../images/Background image@3x.png')}
                >
                 <ListView 
                  contentContainerStyle={styles.listView}
                  onRefresh={()=>this._onRefresh()}
                  onEndReached={ () => this._onEndReached() }
                  dataSource = {this.state.nowPlayingMovieDataSource}
                  renderRow = {(movie) => {return this.renderMovieRow(movie) }}>
                 </ListView>   
                 <View style={styles.paginationButtonContainer}>
                  <Text>Buttons</Text>
                 </View>            
              </Image>
             </View>; 
    case '2':
      return <View>
              <Image
                style={styles.backgroundImageStyle}
                source={require('../../../images/Background image@3x.png')}
                >
                  <ListView 
                    contentContainerStyle={styles.listView}
                    dataSource = {this.state.topRatedMovieDataSource}
                    renderRow = {(movie) => {return this.renderMovieRow(movie) }}>
                  </ListView>
                </Image>
              </View>;
    case '3':
      return <View>
                <Image
                 style={styles.backgroundImageStyle}
                 source={require('../../../images/Background image@3x.png')}
                >
                  <ListView 
                    contentContainerStyle={styles.listView}
                    dataSource = {this.state.upcomintMovieDataSource}
                    renderRow = {(movie) => {return this.renderMovieRow(movie) }}>
                  </ListView>
                </Image>
              </View>;
    default:
      return null;
    }
  };

  render() {
    return (
        <TabViewAnimated
          style={[styles.container, {marginTop: 20}]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
    );
  }
}

const styles = StyleSheet.create({
    paginationContainer: {
      marginTop: 3,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      flexDirection: 'row',
    },
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieRow : {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'gray'
  },
  moviePoster: {
    flex: 2,
  },
  moviePosterSize: {
    height: 200, 
    width: (width / 2) - 15
  },
  movieTitle : {
    flex: 7,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  paginationButtonContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    width: (width / 2) - 15,
    height: 200,
    marginLeft: 10,
    marginTop: 10
  } 
});

module.exports = MovieTabView