import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button , SafeAreaView} from 'react-native';
// import {Card} from 'react-native-elements';
import {Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homeservice({navigation}){

  const items= [
      {id:1, name:'Electrician',  title:{title: 'Electrician', main: 'Service'}},
      {id:2, name:"Painter",  title:{title: 'Painter', main: 'Service'}},
      {id:3, name:'Tiffin suppliers',  title:{title: 'Tiffin-suppliers', main: 'Service'}},
      {id:4, name:'Plumber',  title:{title: 'Plumber', main: 'Service'}},
      {id:5, name:'Labour worker',  title:{title: 'Labour-worker', main: 'Service'}},
      {id:6, name:'Kui safai',  title:{title: 'Kui-safai', main: 'Service'}},

      ]
   const renderItem = ({item}) => (
    <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('MarketDetails', item.title)}>
    <Card.Title titleStyle={{fontSize: 24}} leftStyle={{marginRight: 20}} rightStyle={{marginRight: 30}}  title={item.name}
    right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} /> } />
</TouchableOpacity>
       
   )
    return(
        <View style={{flexDirection:'column',flex:1,margin:'auto',justifyContent:'center', alignItems:'center'}}>
            <SafeAreaView>
      <View style={{alignItems:'center',justifyContent:'center', flexShrink:0}}>
   
          <FlatList 
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor= { item => item.id}
          renderItem= { renderItem} />  
    
      </View>
      </SafeAreaView>


            
        </View>
    ); }

const Style= StyleSheet.create({
    card: {
        borderColor: 'blue',
        margin:5,
        backgroundColor: '#03a89b',
        borderWidth: 5,
        elevation:20,
        justifyContent:'center',
        alignContent: 'center',
        borderRadius: windowHeight/20,
        height: windowHeight/10,
        width: windowWidth/1.1,

    }
})
