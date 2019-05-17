import React, { Component } from "react";
import { Container,Content ,List} from "native-base";

import Header from './Header';
import MyCard from './MyCard';

export default class VideoList extends Component {
    render() {
        return (
            <Container>
                <Header Text="JavaScript"/>
               
                <Content>
                    <List>
                        <MyCard 
                            thumbnail={require('../images/jscript.jpg')} 
                            heading="Video 1"
                            subheading="Some more description"
                        />
                        <MyCard 
                            thumbnail={require('../images/jscript.jpg')} 
                            heading="Video 2"
                            subheading="Some more description"
                        />
                        <MyCard 
                            thumbnail={require('../images/jscript.jpg')} 
                            heading="Video 3"
                            subheading="Some more description"
                        />
                     </List>  
                </Content>
             </Container>
    
        );
    }
}