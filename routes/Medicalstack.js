import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Hospitals from '../screens/Medical/Hospitals';
import Medlabs from '../screens/Medical/Medlabs';
import Medical from '../screens/Medical/Medical';
const Stack = createStackNavigator()

export default function Medicalstack({navigation}) {
    return(
    <Stack.Navigator  screenOptions = {{
        headerStyle :{
            backgroundColor: '#039164',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
       
    }} >
        <Stack.Screen name='Medical' component={Medical}
     options={{
        title : 'Medical',
    }}/>
    <Stack.Screen name='Hospital' component={Hospitals}
     options={{
        title : 'Hospital',
    }}/>
    <Stack.Screen name='Store' component={Medstore}
     options={{
        title : 'Stores',
    }}/>
    <Stack.Screen name='Lab' component={Medlabs}
     options={{
        title : 'Labs',
    }}/>
    </Stack.Navigator>
    )
}