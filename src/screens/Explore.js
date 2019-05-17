

import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View,Image,TouchableOpacity,FlatList } from 'react-native';
import { createStackNavigator,createTabNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import ExploreHome from '../components/Explore/ExploreHome';
import VideoList from './Settings';
import Video from './Settings';



const stak  = createStackNavigator({
    ExploreHome: {
      screen: ExploreHome,
    },
    VideoList: {
      screen: VideoList,
    },
    Video: {
      screen: Video,
    }
  },{
      initialRouteName: "ExploreHome"
  }
  )

export default createAppContainer(stak);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});