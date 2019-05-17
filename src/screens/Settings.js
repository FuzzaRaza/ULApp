import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Right ,Body,Title,Header, Content, Button, Text,Icon } from 'native-base';

export default class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Container>
        <Header>
       
            <Button transparent>
             
            </Button>
      
          <Body>
            <Title>Settings</Title>
          </Body>
      
        </Header>
        <Content>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
        <Button  iconLeft >
            <Icon name='people' />
            <Text onPress={() => this.props.navigation.navigate('Profile')}> Profile </Text>
          </Button>
            <Text></Text>
          <Button iconLeft>
            <Icon name='people' />
            <Text onPress={() => this.props.navigation.navigate('LoginFormStudent')}> Logout </Text>
          </Button>
 
            </Content>
      </Container>
     </View>
    );
  }
}