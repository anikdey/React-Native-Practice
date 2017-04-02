import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  ListView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var API_KEY = '950a4871cb7f9e9d06f1b23058dd0560';
var SIMILAR_MOVIES = 'http://api.themoviedb.org/3/movie/';
console.disableYellowBox = true;
const width = Dimensions.get('window').width

const movies = [
    { "original_title": "", "release_date": ""},
  ];

export default class MovieDetails extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
    similarMovieDataSource : ds.cloneWithRows(movies),
		similarMovies : [
    			{"id" : 1, "original_title": "", "release_date": ""},
  			]
    }
  }

 componentWillMount() {
    var DYNAMIC_SIMILAR_MOVIES_URL = SIMILAR_MOVIES+this.props.movie.id+'/similar?api_key='+API_KEY+'&page='+1;
    fetch(DYNAMIC_SIMILAR_MOVIES_URL)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({similarMovieDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}).cloneWithRows(responseJson.results)});
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
      });
  }

  render() {
    return (
    	<View style={styles.container}>
			   <Image
            style={styles.backgroundImageStyle}
            source={require('../../../images/Background image@3x.png')}
          >
          <View style={[styles.top, {marginTop: 20}]}>
    				<View style={[styles.topLeft]}>
    					<Text style={[{ color: 'white' }]}>Name: {this.props.movie.original_title}</Text>
    					<Text style={[{ color: 'white' }]}>Release Date: {this.props.movie.release_date}</Text>
    					<Text style={[{ color: 'white' }]}>Rating: {this.props.movie.vote_average}</Text>
    				</View>
    				<View style={[styles.topRight, {marginTop: 5}]}>
    					<Image
    			          style={styles.moviePosterSize}
    			          source={{uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+this.props.movie.poster_path}}
    			        />
    				</View>
    			</View>
    			<View style={styles.middle}>
    				<Text style={styles.similarMovieTitle}>Similar Movies</Text>
				 		<ListView 
              contentContainerStyle={styles.listView}
              dataSource = {this.state.similarMovieDataSource}
              renderRow = {(movie) => {return this.renderMovieRow(movie) }}>
             </ListView>
    			</View>
        </Image>
    	</View>
    );
  }

  renderMovieRow(movie) {
      return(<TouchableOpacity 
          style={styles.card}
        >
        <View
          style={styles.moviePoster}
        >
        <Image
          style={styles.moviePosterSizeListView}
          source={{uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+movie.poster_path}}
        />
        </View>
      </TouchableOpacity>);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
  	flex: 2,
  	flexDirection: 'row',
    color: 'white',
  },
  topLeft: {
	 flex: 4,
   justifyContent: 'center',
   alignItems: 'flex-end',
   color: 'white',
   paddingRight: 5,
  },
  topRight: {
	 flex: 4,
	 justifyContent: 'flex-start',
	 alignItems: 'flex-start',
  },

  middle: {
  	flex: 5,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  similarMovieTitle : {
  	height: 20,
  	fontWeight: '700',
  	color: '#FFFFFF',
  },
  similarMovieScrollViewTitle: {
  	fontWeight: '700',
  	color: '#FFFFFF',
  	marginBottom: 5,
  },
  moviePosterSize: {
  	height: 170, 
    width: 150,
    padding: 3,
  },
  moviePoster: {
    flex: 1,
  },
  moviePosterSizeListView: {
    height: 200, 
    width: (width / 2) - 15
  },
  card: {
    width: (width / 2) - 15,
    height: 200,
    marginRight: 10,
    marginTop: 10
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

module.exports = MovieDetails