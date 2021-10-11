
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button , SafeAreaView} from 'react-native';
// import {Card} from 'react-native-elements';
import {Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Market({navigation}){

  const arrayitems= [{id:1, name:'General Store', title:{main: 'Market',title: 'General'}},
  {id:2, name:'RO water supplier',  title:{main: 'Market', title: 'Ro-water'}}, 
  {id:3, name:'Beauty Parlour',  title:{main: 'Market', title: 'Beauty-parlour'}}, 
  {id:4, name:'Mens saloon',  title:{main: 'Market', title: 'Mens-saloon'}}, 
  {id:5, name:'Dairy and sweets',  title:{title: 'Dairy',main: 'Market'}},
   {id:6, name:'Decorators & caterers',  title:{title: 'Decorators',main: 'Market'}},
   {id:7, name:' Dry cleaners',  title:{title: 'Dry-clean', main: 'Market'}}, 
   {id:8, name:'Electrical shop',  title:{title: 'Electrical', main: 'Market'}}, 
   {id:9, name:' Flower Shop',  title:{title: 'Flower', main: 'Market'}},
   {id:10, name:'Furniture shop',  title:{title: 'Furniture', main: 'Market'}},
   {id:11, name:'Footwear Shop',  title:{title: 'Footwear', main: 'Market'}},
{id:12, name:'Gift House' ,  title:{title: 'Gift-house', main: 'Market'}}, 
{id:13, name:'Hardware Shop',  title:{title: 'Hardware', main: 'Market'}}, 
{id:14, name:'Jewellary Shop',  title:{title: 'Jewellary', main: 'Market'}},
{id:15, name:'Juice Corner',  title:{title: 'Juice-corner', main: 'Market'}},
{id:16, name:'Ladies Tailor',  title:{title: 'Ladies-tailor', main: 'Market'}},
{id:17, name:'Mens Tailor',  title:{title: 'Mens-tailor', main: 'Market'}},
{id:18, name:'Cloth Shop',  title:{title: 'Cloth', main: 'Market'}},
{id:19, name:'Mobile& Repair Shop',  title:{title: 'Mobile', main: 'Market'}},
{id:20, name:'Optical Shop',  title:{title: 'Optical', main: 'Market'}},
{id:21, name:'Photo Studio',  title:{title: 'Photo', main: 'Market'}}, 
{id:22, name:'Printing Press',  title:{title: 'Printing',main: 'Market'}},
{id:23, name:'Tea Stall',  title:{title: 'Tea', main: 'Market'}}, 
{id:24, name:'Book Depot',  title:{title: 'Book', main: 'Market'}}
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
      <View style={{alignItems:'center', flexShrink:0}}>
   
          <FlatList 
          showsVerticalScrollIndicator={false}
          data={arrayitems}
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
