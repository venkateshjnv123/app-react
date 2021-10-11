
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Utilities({navigation}){
    return(
        <View  style={{flexDirection:'column',flex:1,margin:'auto',justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Medlabs', {title:'Utility' ,child: 'Gram-sachivalay'})}>
                <Card.Title   title="Gram-sachivalay"
                left={(props) => <Icon {...props} name='help-center' />}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Medlabs', {title:'Utility' ,child: 'Ration-Depot'})}>
                <Card.Title   title="Ration-depot"
                left={(props) => <Icon {...props} name='storefront' />}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Medlabs', {title:'Utility' ,child: 'Govt-school'})}>
                <Card.Title   title="Govt-school"
                left={(props) => <Icon {...props} name='school' />}/>
            </TouchableOpacity>
            
            
        </View>
    ); }

const Style= StyleSheet.create({
    card: {
        borderColor: 'blue',
        margin:5,
        backgroundColor: '#8ef5f3',
        borderWidth: 5,
        elevation:20,
        justifyContent:'center',
        alignContent: 'center',
        borderRadius: windowHeight/20,
        height: windowHeight/10 ,
        width: windowWidth/1.1,
    }
})
