
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Details({route}){
    return(
        <View style={{alignItems:'center', justifyContent:'center'}}> 
            <Text style={{fontSize: 36, color:'black'}}> {route.params.title} </Text>
            <Text style={{fontSize:22, color:'green'}}> This feature is not added yet....</Text>
            <Text  style={{fontSize:22, color:'green'}}> U can check New tab for updates.</Text>
            <Text  style={{fontSize:22, color:'green'}}> Thank you </Text>
            
        </View>
    ); }
