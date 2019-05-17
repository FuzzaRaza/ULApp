

import React, { Component } from 'react';

import {

  Platform,

  StyleSheet,

  Text,

  View,

  Image,

  TouchableOpacity,

  FlatList

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import WebItems from '../components/WebItems';

import data from '../data.json';





export default class HomePageTeacherScreen extends Component {

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.navBar}>
<Text style={styles.tabTitle1}>Home Page (Teacher)</Text>
         
          <View style={styles.rightNav}>
            
          </View>

        </View>

        <View style={styles.body}>

          <FlatList

          data={data.items}

          renderItem={(video)=><WebItems video={video.item} />}

          keyExtractor={(item)=>item.id}

          ItemSeparatorComponent={()=><View style={{height:3.5,backgroundColor:'#E5E5E5'}}/>}



           />

        </View>

        <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem}>

            <Icon name="home" size={25}/>

            <Text style={styles.tabTitle}  onPress={() => this.props.navigation.navigate('HomePageTeacher')}>Home</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>

<Icon name="subscriptions" size={25} />

<Text style={styles.tabTitle}  onPress={() => this.props.navigation.navigate('subscriptions')}>Upload Video</Text>

</TouchableOpacity>


          <TouchableOpacity style={styles.tabItem}>

            <Icon name="folder" size={25} />

            <Text style={styles.tabTitle}  onPress={() => this.props.navigation.navigate('Welcome')}>Logout</Text>

          </TouchableOpacity>

        </View>

      </View>

    );

  }

}



const styles = StyleSheet.create({

  container: {

    flex: 1

  },

  navBar: {

    height: 55,

    backgroundColor: 'white',

    elevation: 3,

    paddingHorizontal: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between'

  },

  rightNav: {

    flexDirection: 'row'

  },

  navItem: {

    marginLeft: 25

  },

  body: {

    flex: 1

  },

  tabBar: {

    backgroundColor: 'white',

    height: 60,

    borderTopWidth: 0.5,

    borderColor: '#E5E5E5',

    flexDirection: 'row',

    justifyContent: 'space-around'

  },

  tabItem: {

    alignItems: 'center',

    justifyContent: 'center'

  },

  tabTitle: {

    fontSize: 11,

    color: '#3c3c3c',

    paddingTop: 4

  },
  tabTitle1: {

    fontSize: 20,

    color: '#3c3c3c',

    paddingTop: 4,
  
  }

});