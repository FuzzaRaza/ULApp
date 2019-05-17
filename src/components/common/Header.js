import React from "react";
import {  View } from "react-native";
import { Container, Content, Button,Text, Icon } from 'native-base';
//Creation
const Header = props => {
const { textStyle, viewStyle } = styles;
return (
<View style={viewStyle}>
<Button transparent>
              <Icon name='arrow-back' />
            </Button>
<Text style={textStyle}>{props.headerText}</Text>
</View>
);
};
//Defining the Styles
const styles = {
viewStyle: {
backgroundColor: "#F8F8F8",
justifyContents: "center",
alignItems: "center",
height: 50,
paddingTop: 15,
// shadowColor: 'yellow',
// shadowOffset: { width: 0, height: 2 },
// shadownOpacity: 0.2,
// elevation: 2,
position: "relative"
},
textStyle: {
fontSize: 20,
backgroundColor: "darksalmon"
}
};
//Availability to other parts
// export default Header;
export default Header ;