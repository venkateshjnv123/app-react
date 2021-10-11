import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import windowWidth from '../shared/Dimensions';

export default function MarketDetails({route}){
    const [data, setdata] = useState();
    const [isloading, setisloading]= useState(false);
    const [child1, setchild1]=useState(route.params.main);
    const [child2, setchild2] =useState(route.params.title)
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
        <Text>{item.Call}</Text>
        <Text>{item.Time}</Text>
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