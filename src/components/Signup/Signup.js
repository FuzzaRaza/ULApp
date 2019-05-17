import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView} from "react-native";
import SignForm from "./SignForm";

export default class Signup extends Component {
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
                    <SignForm />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#3498db'
    },
    formContainer: {
        flex:5,
        
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 80,
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