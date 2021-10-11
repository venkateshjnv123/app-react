import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Favourites from '../screens/Favourites';

const Stack = createStackNavigator()

export default function Favstack({navigation}) {
    return(
    <Stack.Navigator  screenOptions = {{
        headerStyle :{
            backgroundColor: '#c208ac',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
       
    }} >
    <Stack.Screen name='Favourites' component={Favourites}
     options={{
        title : 'Favourites',
        headerLeft : () => (
            <Icon.Button name="menu" size={28} backgroundColor="#c208ac" onPress ={() =>{navigation.openDrawer()}}></Icon.Button>
        )
    }}/>
    </Stack.Navigator>
    )
}