import React, { useState , useEffect} from "react";
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Button , SafeAreaView} from 'react-native';
import {Card, Avatar } from 'react-native-paper';
import { Badge } from "react-native-elements";
import windowWidth from "../shared/Dimensions";
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dialCall from '../shared/Makecall';

export default function Addcard({}){
    const [data, setdata]=useState();
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} >
        {/* <Card.Title  titleStyle={{fontSize: 22}} leftStyle={{marginRight: 20}} rightStyle={{marginRight: 30}}  title={item.Name}
        left={(props)=> <Badge value='AD' textStyle={{fontSize: 16}} badgeStyle={{height:25, width:40}} status='warning'/>} /> */}
        <Badge value='AD' textStyle={{fontSize: 16}} badgeStyle={{height:25, width:40}} status='warning'/>
        <Text style={{fontSize: 24}} > {item.Name}</Text>
        <Text style={{fontSize: 16, marginTop:0}}> {item.Call} <Icon name='call' style={{textAlignVertical:'center'}} onPress={() => dialCall(item.Mobile)} size={20} /></Text>
        <Text style={{fontSize: 16}}>{item.Address}</Text>
    </TouchableOpacity>
           )
const  getUsers = () => {
            firebase.database().ref('Data').child('Add').on('value', function (snapshot) {
      setdata(snapshot.val());
  
      });
      } 
      useEffect( () => {
        getUsers();
        
      }, []);

    return(
        <View style={{flex:1,margin:'auto',justifyContent:'center', alignItems:'center'}}>
        <SafeAreaView>
        <View style={{alignItems:'center',justifyContent:'center', flexShrink:0}}>

      <FlatList 
      horizontal
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor= { item => item.id}
      renderItem= { renderItem} />  

  </View>
  </SafeAreaView>
        
    </View>
    );
}

const styles= StyleSheet.create({
    item: {
      marginHorizontal: 20,
      marginVertical:10,
      borderColor: 'black',
      borderWidth:3,
      elevation:5,
      fontSize: 16,
      borderRadius:40,
      alignItems: 'center',
      backgroundColor: '#ffe6ab',
      justifyContent:'center',
      padding:5,
      width: windowWidth/1.2
  },
  })