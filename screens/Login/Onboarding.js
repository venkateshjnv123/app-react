import Onboarding from 'react-native-onboarding-swiper';

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button,Image } from 'react-native';

export default function Onboard({navigation}){
    return(
            <Onboarding
            onDone={()=>navigation.replace("Login")}
            onSkip={()=>navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image style={{ width:100, height: 100}} source={require('../../images/logo4.png')} />,
      title: 'Charkhi Dadri',
      subtitle: 'Thanks for downloading the App, The most useful phone guide is here',
    },
    {
        backgroundColor: '#fff',
        image: <Image style={{ width:100, height: 100}} source={require('../../images/globe.png')} />,
        title: 'TO HELP THE PEOPLE',
        subtitle: 'many features and many more to come',
    }
    
  ]}
/>

            
    ); }
