
import React, {Component} from 'react';
import {View} from 'react-native';
import WelcomeScreen from './src/screens/Welcome';
import ProfileScreen from './src/screens/Profile';
import CourseTeacherScreen from './src/screens/CourseTeacher';
import HomePageScreen from './src/screens/HomePage';
import HomePageTeacherScreen from './src/screens/HomePageTeacher';
import LoginFormStudentScreen from './src/components/LoginFormStudent';
import LoginFormTeacherScreen from './src/screens/LoginFormTeacher';
import CourseScreen from './src/screens/CourseSelection';
import SettingsScreen from './src/screens/Settings';
import Header from './src/components/common/Header';
import {createSwitchNavigator,createStackNavigator,createAppContainer} from "react-navigation";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        return <AppNavigator />
      </View>
    );
  }
}


const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Head:Header,
  HomePage: HomePageScreen,
  LoginFormStudent: LoginFormStudentScreen,
  LoginFormTeacher: LoginFormTeacherScreen,
  Course:CourseScreen,
  Settings: SettingsScreen,
  Profile: ProfileScreen,
  CourseTeacher: CourseTeacherScreen,
  HomePageTeacher: HomePageTeacherScreen
  
});

export default createAppContainer(AppNavigator);