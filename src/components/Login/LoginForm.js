import React, { Component } from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,StatusBar} from "react-native";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput 
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="go"
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {

        //backgroundColor: 'rgba(255,255,255,0.2)',
       // marginBottom: 10,
        //paddingHorizontal: 10,

        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical:  15

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});