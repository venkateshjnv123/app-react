import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Government from '../screens/Government';
import GovernmentDetails from '../screens/Government_details';
const Stack = createStackNavigator()

export default function GovernmentStack({navigation}) {
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
        <Stack.Screen name='Government' component={Government}
     options={{
        title : 'Government',
    }}/>
     <Stack.Screen name='details' component={GovernmentDetails}
     options={{
        title : navigation.getparam('title'),
    }}/>
    
    </Stack.Navigator>
    )
}