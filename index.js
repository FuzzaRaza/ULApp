/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/Signup/Signup';
//import App from './src/components/Login/Login';
// import App from './src/components/Video/Video';
//import App from './src/components/Explore/ExploreHome';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
