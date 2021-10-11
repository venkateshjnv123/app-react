/**
 * @format
 */
import firebase from 'firebase';
import {AppRegistry} from 'react-native';
import { registerRootComponent } from 'expo';
import App from './App';
import {name as AppName} from './app.json';

var config={
    databaseURL: 'https://app-dadri-58756-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'app-dadri-58756',

};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
AppRegistry.registerComponent(AppName, () => App);
