import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Important from '../screens/Important';

const Stack = createStackNavigator()

export default function Impstack({navigation}) {
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
    <Stack.Screen name='Important' component={Important}
     options={{
        title : 'Important',
        headerLeft : () => (
            <Icon.Button name="menu" size={28} backgroundColor="#039164" onPress ={() =>{navigation.openDrawer()}}></Icon.Button>
        )
    }}/>
    </Stack.Navigator>
    )
}