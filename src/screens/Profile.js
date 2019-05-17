import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
         
          <Body>
            <Title>Profile</Title>
          </Body>
     
        </Header>
        <Content>
          <Text>
           Name : XYZ
           Class : Mad 
           Courses: Mad , Wad
          </Text>


          <Button  iconLeft >

            <Text onPress={() => this.props.navigation.navigate('HomePage')}> Go Back </Text>
          </Button>
        </Content>
       
          
      </Container>
    );
  }
}