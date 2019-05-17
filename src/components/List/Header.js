import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header ,Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconButtonTextButtonExample extends Component {
  render() {
    return (
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.Text}</Title>
          </Body>
        </Header>
     
    );
  }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#34495e'
    }
});