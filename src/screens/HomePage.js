

import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View,Image,TouchableOpacity,FlatList } from 'react-native';
import { createTabNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './Explore';
import Settings from './Settings';



const stak  = createBottomTabNavigator({
    Explore: {
      screen: Explore,
      navigationOptions:{
        tabBarLabel: 'EXPLORE',
        // tintColor is prop given to ..& will return Icon
        tabBarIcon:({ tintColor }) => (
          <Icon 
              name="ios-search"
              color={tintColor}
              size={24}
          />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions:{
        tabBarLabel: 'SETTINGS',
        // tintColor is prop given to ..& will return Icon
        tabBarIcon:({ tintColor }) => (
          <Icon 
              name="ios-settings"
              color={tintColor}
              size={24}
          />
        )
      }
    }
  },
  // these will applicable to both screens
    {
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style:{
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowOffset: {width: 5, height: 3},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          //shadow cmd to run in android(elevation=shadow effect)
          elevation: 5
        }
      }
    
    }
  )// /Bottom Navigator

export default createAppContainer(stak);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});