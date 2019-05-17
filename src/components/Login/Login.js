import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView} from "react-native";

import LoginForm from "./LoginForm";

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    source={require('../../images/books.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.title}>E-Learning Platform ... !</Text>
                </View>

                <View style={styles.formContainer}>
                    <LoginForm />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: '300',
        fontSize: 20  
    }
});