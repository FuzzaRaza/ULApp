

import React, { Component } from "react";
import { View } from "react-native";
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import Header from "../components/common/Header";
import Spinner from "../components/common/Spinner";


// Import our LoginForm component to be displayed on the screen
import LoginFormScreen from "../components/LoginForm";

class Teacher extends Component {

  render() {
  return (
  <View>
  <LoginFormScreen /> 
  </View>
  );
  }
  }
  
  export default Teacher;
  