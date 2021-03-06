import React, {Component} from 'react';
import{ScrollView,StyleSheet,Text,View,} from 'react-native';
import {List,Content,Card,Container,CardItem,Left,Right,Body,Icon,Button,Thumbnail} from 'native-base';

import VideoPlayer from 'react-native-video-controls';
import MyCard from './Mycard';

export default class VideoPlaye extends Component {
    render () {
        return (
            <View style={styles.container}>
               {/* Video Player */}
                <View style={styles.player}>
                    <VideoPlayer
                        source={require('../../assets/pip.mp4')}
                       
                    />
                </View>
                {/* / Video Player */}

                {/* Video Title */}
                <View style={styles.head}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../images/jscript.jpg')} />
                                <Body>
                                <Text>Video 1</Text>
                                <Text note>Javascript Tuitorials</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
                {/* / Video Title */}

                {/* More Videos List */}
               
                    <ScrollView style={styles.list}>
                        <Content>
                            <List>
                                <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 2"
                                    subheading="Some more description"
                                />
                                <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 3"
                                    subheading="Some more description"
                                />
                                <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 4"
                                    subheading="Some more description"
                                />
                                 <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 5"
                                    subheading="Some more description"
                                />
                                 <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 6"
                                    subheading="Some more description"
                                />
                                 <MyCard 
                                    thumbnail={require('../images/javalogo.jpg')} 
                                    heading="Video 7"
                                    subheading="Some more description"
                                />
                            </List>  
                        </Content>
                    </ScrollView>   
                
               {/* More Videos List */}

            </View>        
        ); 
    }
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 //justifyContent: 'center',
 //alignItems: 'center',
 //backgroundColor: 'black'
},
player:{
    height:300,
    width:'100%'
},
list:{
  //  justifyContent: 'center',
    //alignItems: 'center',
    height:'100%',
    width:'100%'
},
head:{
    width:'100%'
},
fullScreen: {
 position: 'absolute',
 top: 0,
 left: 0,
 bottom: 0,
 right: 0,
},
controls: {
 backgroundColor: "transparent",
 borderRadius: 5,
 position: 'absolute', 
 bottom: 44,
 left: 4,
 right: 4,
},
progress: {
 flex: 1,
 flexDirection: 'row',
 borderRadius: 3,
 overflow: 'hidden',
},
innerProgressCompleted: {
 height: 20,
 backgroundColor: '#cccccc'
},
innerProgressRemaining: {
 height: 20,
 backgroundColor: '#2C2C2C',
},
generalControls: {
 flex: 1,
 flexDirection: 'row',
 overflow: 'hidden', 
 paddingBottom: 10,
},
skinControl: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
},
rateControl: {
 flex: 1,
 flexDirection: 'row',
 justifyContent: 'center',
},
volumeControl: {
 flex: 1,
 flexDirection: 'row',
 justifyContent: 'center',
},
resizeModeControl: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center'
},
ignoreSilentSwitchControl: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center'
},
controlOption: {
 alignSelf: 'center',
 fontSize: 11,
 color: "white",
 paddingLeft: 2,
 paddingRight: 2,
 lineHeight: 12,
},
nativeVideoControls: {
  top: 184,
  height: 300
}
});