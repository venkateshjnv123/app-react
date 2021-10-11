

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import windowWidth from '../../shared/Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dialCall from '../../shared/Makecall';
export default function Medlabs({route}){
    const [data, setdata] = useState();
    const [isloading, setisloading]= useState(false);
    const [child1, setchild1]=useState(route.params.title);
    const [child2, setchild2] =useState(route.params.child)
    const  getUsers = () => {
      firebase.database().ref('Data').child(child1).child(child2).on('value', function (snapshot) {
setdata(snapshot.val());
setisloading(false);
});
} 
useEffect( () => {
  setisloading(true);
  getUsers();
  
}, []);
      
      const renderItem =( {item}) => (
        <View style={styles.item}>
        <Text> {item.Name}</Text>
        <Text> {item.Address}</Text>
        <Text>{item.Call} <Icon name='call' style={{textAlignVertical:'center'}} onPress={() => dialCall(item.Call)} size={20} /> </Text>
    </View>
      )
        
    return(
      <SafeAreaView>
      <View style={{alignItems:'center', flexShrink:0}}>

          {isloading ? <Text>Loading...</Text> : (
            <View>
   
          <FlatList 
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor= { item => item.No}
          renderItem= { renderItem} />  
          </View>
          )
          }
      </View>
      </SafeAreaView>
    ); }

    const styles= StyleSheet.create({
      item: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth:3,
        elevation:10,
        fontSize: 16,
        borderRadius:40,
        alignItems: 'center',
        backgroundColor: '#fcb42d',
        justifyContent:'center',
        padding:10,
        width: windowWidth/1.2
    },
    })