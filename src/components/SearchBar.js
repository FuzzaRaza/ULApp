import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,Text,TextInput,View,Image,TouchableOpacity,FlatList,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends React.Component  {
    render(){
        return(
            <View style={{height: this.startHeaderHeight, backgroundColor: 'white',
            borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
               <View style={{flexDirection: 'row', padding: 10, 
                       backgroundColor: 'white', marginHorizontal: 20,
                       shadowOffset:{width: 0, height: 0},
                       shadowColor: 'black',
                       shadowOpacity: 0.2,
                       elevation: 1,
                       marginTop: Platform.OS  ==  'android' ? 30 : null   
                        }}>
                    <Icon name="ios-search"size={26} style={{marginTop:10}}   />
                   <TextInput
                       underlineColorAndroid = "transparent"
                       placeholder = "javascript , C# , java"
                       placeholderTextColor = "grey"
                       style={{flex: 1, fontWeight: '700', backgroundColor: 'white',marginLeft: 10}}
                   />
                  
               </View>
           </View>
        );
    }
}