import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity,
} from 'react-native'

import MovieTabView from '../src/components/tabview/MovieTabView'
import MovieDetails from '../src/components/tabview/MovieDetails'
//import WelcomeComponent from '../src/components/navPractice/WelcomeComponent'

export default class Router extends Component {
   constructor(){
      super()
   }
   render() {
      return (
            <Navigator
               initialRoute = {{ name: 'MovieTabView', title: 'Home' }}
               renderScene = { this.renderScene }
               sceneStyle={{paddingTop: 35}}
               containerStyle ={{height: 120}}
               navigationBar = {
                  <Navigator.NavigationBar
                     style = { styles.navigationBar }
                     routeMapper = { NavigationBarRouteMapper } />
               }
            />
      );
   }
   renderScene(route, navigator) {
      if(route.name == 'MovieTabView') {
         return (
            <MovieTabView
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'MovieDetails') {
         return (
            <MovieDetails
               navigator = {navigator}
               {...route.passProps} 
               movie = {route.movie}
            />
         )
      }
      if(route.name == 'Anik') {
         return (
            <Anik
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }

   }
}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(index > 0) {
         return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableOpacity>
         )
      }
      else { return null }
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
         <TouchableOpacity
            onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }>
               { route.rightText || 'Menu' }
            </Text>
         </TouchableOpacity>
      )
   },
   Title(route, navigator, index, navState) {
      return (
         <Text style = { styles.title }>
            The Movie
         </Text>
      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: '#171513',
      paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
   },
   leftButton: {
      paddingVertical: 10,
      color: '#ffffff',
      fontSize: 14,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      fontSize: 14,
   },
   rightButton: {
      color: '#ffffff',
      fontSize: 14,
   }
})