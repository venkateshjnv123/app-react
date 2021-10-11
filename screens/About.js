
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, Image } from 'react-native';

export default function About({navigation}){
    return(<Onboarding
        onDone={()=>navigation.navigate("Home")}
        onSkip={()=>navigation.navigate('Home')}
pages={[
{
  backgroundColor: '#045c1e',
  image: <Image style={{ width:100, height: 100}} source={require('../images/logo4.png')} />,
  title: 'Charkhi Dadri',
  subtitle: 'we are team want to help the people of charkhi dadri...by bringing out a app.',
},
{
    backgroundColor: '#045c1e',
    image: <Image style={{ width:100, height: 100}} source={require('../images/globe.png')} />,
    title: 'To the people-into the people',
    subtitle: 'many features and many more to come',
}

]}
/>
    ); }
