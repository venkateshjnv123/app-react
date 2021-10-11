import React,{useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyTabs from './Maintabscreen';
import Aboutstack from './Aboutstack';
import Reportproblem from'./Reportproblem.js' ;
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawercontent } from './Drawercontent';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Drawer=createDrawerNavigator();

function Drawernav(){
    return(
      
    <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <Drawercontent {...props}/>} >
        <Drawer.Screen options={{headerStyle: {backgroundColor: 'blue',}, headerTintColor:'#fff'}} name="Home" component={MyTabs} />
        <Drawer.Screen options={{headerStyle: {backgroundColor: 'red',}}} name="About" component={Aboutstack} />
        <Drawer.Screen options={{headerStyle: {backgroundColor: 'red',}}} name="Report" component={Reportproblem} />
      </Drawer.Navigator>
    )
}

export default Drawernav; 