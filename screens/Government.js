
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { Card , Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Government({navigation}){
    const [item, setitem]=useState({
        title:'department'
    })

    return(
        <View style={{flexDirection:'column',flex:1,margin:'auto',justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity  style={Style.card} onPress={()=> navigation.navigate('Department' )}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}  title="Departments"
                left={(props) => <Avatar.Image  source={require('../images/government_haryana.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.card}  onPress={()=> navigation.navigate('details', {title:'Bank'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}  title="Bank"
                left={(props) => <Avatar.Image  source={require('../images/bank.png')} {...props} /> } 
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('details', {title:'Petrol'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}   title="Petrol Pump"
                left={(props) => <Avatar.Image  source={require('../images/petrol.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('details', {title:'Police-departments'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}   title="Police-Station"
                left={(props) => <Avatar.Image  source={require('../images/police_haryana.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity> 
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('details', {title:'Advocate'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}   title="Advocate"
                left={(props) => <Avatar.Image  source={require('../images/advocate.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} />}/>
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
