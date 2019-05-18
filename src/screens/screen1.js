import React from "react";
import { ImageBackground,Text} from "react-native";

class screen1 extends React.Component{
    render(){
        return(
            <ImageBackground source={require('./image.png')}>
                <Text>Success!</Text>
            </ImageBackground>
        );
    }
}
export default{screen1};