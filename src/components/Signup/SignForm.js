import React, { Component } from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView} from "react-native";
import * as firebase from "firebase";
import { Button } from "native-base";

// Firebase initialization
const configfirebase={
    apiKey: "AIzaSyBKnYaiwW9SAetZz_rjcrn0QToDDBpqWFk",
    authDomain: "ulearn-ab68f.firebaseapp.com",
    databaseURL: "https://ulearn-ab68f.firebaseio.com",
    projectId: "ulearn-ab68f",
    storageBucket: "ulearn-ab68f.appspot.com",
    messagingSenderId: "830146876141",
    appId: "1:830146876141:web:f9c93d9931131e19"
};
firebase.initializeApp(configfirebase);

export default class SignForm extends Component {
constructor (props){
    super(props)
    this.state=({
        email:'',
        password:''
    })
}
Signup=(email,password)=>{
    try{
        if (this.state.password.length<7)
        {
            alert("Your password is short!")
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email,password)
        }
    catch(error){
            console.log(error.toString())
        }
}
LoginUser=(email,password)=>{
try{
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
    })
}
catch(error){
    console.log(error.toString())
}
}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Registration Form</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="next"
                    ref={(input) => this.emailInput = input}
                    //onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={(email)=> this.setState({email})}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                     underlineColorAndroid={'transparent'}
                />  

                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="go"
                    style={styles.input}
                    //ref={(input) => this.passwordInput = input}
                    onChangeText={(password)=> this.setState({password})}
                     underlineColorAndroid={'transparent'}
                />

                <TouchableOpacity style={styles.button}>
                    <Button onPress={()=>this.Signup(this.state.email,this.state.password)}
                    >
                    <Text style={styles.buttontext}>REGISTER</Text>
                    </Button>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.button}> 
                    <Button onPress={()=>this.LoginUser(this.state.email,this.state.password)}
                    >
                    <Text style={styles.buttontext}>SIGN IN</Text>
                    </Button>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'   
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 25,
        color: '#fff',
        //borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    button: {
        alignSelf: 'stretch',
        //alignItems: 'center',
        padding: 80,
        //marginTop: 8,        
        //backgroundColor: '#fff',
        paddingVertical:  12
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 10
    }
});