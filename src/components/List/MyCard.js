import React, { Component } from "react";
import { Container, Content, Title,List, ListItem, Thumbnail,Text, Left,Body,Right,Button } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyList extends Component {
    render() {
        return (
        
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={this.props.thumbnail} />
                </Left>
                <Body>
                    <Text>{this.props.heading}</Text>
                    <Text note numberOfLines={1}>{this.props.subheading}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="ios-play" size={25}	/>
                    </Button>  
                </Right>
                <Right>
                    <Button transparent>
                        <Icon name="ios-cloud-download" size={25}	/>
                    </Button>  
                </Right>
                </ListItem>
            

        );
    }
}