import React, { Component } from "react";

 import { View,Button,Text} from "react-native";
 import firebase from "firebase";
import Card from "../components/common/Card";
import CardSection from "../components/common/CardSection";
import  Input  from "../components/common/Input";


export default class LoginFormTeacherScreen extends Component {
    
    render() {
        return (
          
    <Card>
        <CardSection>

<View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      
<Button
  
  title="Login Form"
  color="#841584"
/>
      </View>
      
</CardSection>
 <CardSection>
 <Input
    autoCorrect
    placeholder="user@email.com"
    label="Email: "
    />
    </CardSection>
    {/* For Password */}
    <CardSection>
    <Input
    secureTextEntry
    placeholder="password"
    label="Password"
    />
    </CardSection>
<CardSection>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        <Button
          title="Sign In"
          onPress={() => this.props.navigation.navigate('CourseTeacher')}
        />
      </View>
      
</CardSection>
<CardSection>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </View>
      
</CardSection>
</Card>
  );
}
}
