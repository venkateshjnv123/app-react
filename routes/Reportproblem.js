import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Report from '../screens/Report';

const Stack = createStackNavigator()

export default function Reportproblem({navigation}) {
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
    <Stack.Screen name='Report' component={Report}
     options={{
        title : 'Report',
        headerLeft : () => (
            <Icon.Button name="menu" size={28} backgroundColor="#039164" onPress ={() =>{navigation.openDrawer()}}></Icon.Button>
        )
    }}/>
    </Stack.Navigator>
    )
}