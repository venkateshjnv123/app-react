import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
const Tab = createMaterialBottomTabNavigator();
import Homestack from './Homestack';
import Favstack from './Favoritestack';
import Impstack from './Importantstack';

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#068dba',
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Important"
        component={Impstack}
        options={{
          tabBarLabel: 'New',
          tabBarColor: '#039164',
          tabBarIcon: ({ color }) => (
            <Icon name='star' color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Favstack}
        options={{
          tabBarLabel: 'liked',
          tabBarColor:'#c208ac',
          tabBarIcon: ({ color }) => (
            <Icon name='favorite' color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}