import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Login from '../screens/Login/Login';
import Onboard from '../screens/Login/Onboarding';
import { View } from 'react-native';
import Signup from '../screens/Login/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator()

export default function LoginStack({navigation}) {
 const [firstlaunch, setfirstlaunch]= useState(null);
    const [user, setuser] =useState(false);
    
    useEffect(() => {
      AsyncStorage.getItem('alreadylaunched').then(value => {
        if(value==null) {
           AsyncStorage.setItem('alreadylaunched', 'true');
           setfirstlaunch(true);
        }
        else{
          setfirstlaunch(false);
        }
      });
      GoogleSignin.configure({
        webClientId: '267808719577-ijtep8mqrl79fgl0k1k8fjlu5t0gq0em.apps.googleusercontent.com',
      });
    }, [])

    if (firstlaunch ===null){
      return null
    }
    else if (firstlaunch===true){
      return (
        <Stack.Navigator  screenOptions = {{
            headerStyle :{
                backgroundColor: '#039164',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight: 'bold',
            }
           
        }} >
            <Stack.Screen name='Onboard' component={Onboard}
         options={{
            title : 'onboard',
        }}/>
        <Stack.Screen name='Login' component={Login}
         options={{header: () => null}}/>
        <Stack.Screen name='Signup' component={Signup}
         options={{header: () => null}} />
        </Stack.Navigator>
      )
    } else{
    return(
    <Stack.Navigator >
    <Stack.Screen name='Login' component={Login}
    options={{header: () => null}}
    />
    <Stack.Screen name='Signup' component={Signup}
     options={({navigation}) => ({
        title: '',
        headerStyle: {
          backgroundColor: '#f9fafd',
          shadowColor: '#f9fafd',
          elevation: 0,
        },
        // headerLeft: () => (
        //   <View style={{marginLeft: 10}}>
        //     <Icon 
        //       name="long-arrow-left"
        //       size={25}
        //       backgroundColor="#f9fafd"
        //       color="#333"
        //       onPress={() => navigation.navigate('Login')}
        //     />
        //   </View>
        // ),
      })}/>
    </Stack.Navigator>
    ) }
}