import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Title,Text, Body,Button ,Icon} from 'native-base';
export default class CourseScreen extends Component {
  render() {
    return (
      <Container>
   <Header>
       
       <Button transparent>
        
       </Button>
 
     <Body>
       <Title>Choose Courses</Title>
     </Body>
 
   </Header>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>DAA</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>MAD</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>WAD</Text>
            </Body>
          </ListItem>

          <Button  iconLeft >

            <Text onPress={() => this.props.navigation.navigate('HomePage')}> Skip</Text>
          </Button>
          <Text></Text>
          <Button  iconLeft >
          
          <Text onPress={() => this.props.navigation.navigate('HomePage')}> Done</Text>
        </Button>
   
        </Content>
      </Container>
    );
  }
}