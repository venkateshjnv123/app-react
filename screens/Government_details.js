
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';

export default function GovernmentDetails({route}){
    return(
        <View>
            <Text style={{fontSize: 36, color:'black'}}> {route.params.title} </Text>
            
        </View>
    ); }
