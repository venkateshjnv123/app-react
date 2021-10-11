
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,ScrollView, TouchableOpacity, FlatList, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Card, Avatar } from 'react-native-paper';
import filter from 'lodash.filter';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Search({navigation}){
    const [search, updatesearch] =useState('');
    const [fulldata, setfulldata] =useState();
    const searcharr =[
        {id:1, navigatehere: 'Automobile',title:{title: 'Automobile'}, image: require('../images/automob.png') , Name:'Automobile'},
        {id:2, navigatehere: 'Details',title:{title: 'city-search'}, image: require('../images/globe.png') , Name:'City-search'},
        {id:3, navigatehere: 'Education',title:{title: 'Education'}, image: require('../images/education.png') , Name:'Education'},
        {id:4, navigatehere: 'Details',title:{title: 'Entertainment'}, image: require('../images/entertainment.png') , Name:'Entertainment'},
        {id:5, navigatehere: 'Restaurents',title:{title: 'Restaurens'}, image: require('../images/food.png') , Name:'Restaurents'},
        {id:6, navigatehere: 'Travel',title:{title: 'Travel'}, image: require('../images/travel.png') , Name:'Travel'},
        {id:7, navigatehere: 'Details',title:{title: 'Tourism'}, image: require('../images/travel.png') , Name:'Tourism'},
        {id:8, navigatehere: 'Details',title:{title: 'About-app'}, image: require('../images/info.png') , Name:'App-info'},
        {id:9, navigatehere: 'Aboutdadri',title:{title: 'About-dadri'}, image: require('../images/logo.png') , Name:'About'},
        {id:10, navigatehere: 'Homeservice',title:{title: 'Home-services'}, image: require('../images/realestate.png') , Name:'Home-services'},
        {id:11, navigatehere: 'Press',title:{title: 'Press'}, image: require('../images/press.png') , Name:'Press-media'},
        {id:12, navigatehere: 'Realestate',title:{title: 'About-dadri'}, image: require('../images/realestate1.png') , Name:'Real-estate'},
        {id:13, navigatehere: 'Social',title:{title: 'About-dadri'}, image: require('../images/ngo3.png') , Name:'Social'},
        {id:14, navigatehere: 'Government', title:{title: 'Automobile'}, image: require('../images/government_haryana.png'), Name:'Government'},
        {id:15, navigatehere: 'Market', title:{title: 'Automobile'},image: require('../images/market4.png'), Name:'Market'},
        {id:16, navigatehere: 'Medical',title:{title: 'Automobile'}, image: require('../images/medical_2.png'), Name:'Medical'},
        {id:17, navigatehere: 'Utilities',title:{title: 'Automobile'}, image: require('../images/utility4.png') , Name:'Utilities'},
        {id:18, navigatehere: 'Blood',image: require('../images/blood.png') , Name:'Blood'},
        {id:19, navigatehere: 'Hospitals',image: require('../images/hospital.png') , Name:'Hospital'},
        {id:20, navigatehere: 'Medlabs',title:{title: 'Medical', child:'Lab'}, image: require('../images/Medilab.png') , Name:'Medical-lab'},
        {id:21, navigatehere: 'Medlabs',title:{title: 'Medical', child:'Medicalstore'}, image: require('../images/Medical_1.png') , Name:'Medical-store'},
        

    ]
    
    useEffect( () => {
      setfulldata(searcharr)
    }, []);

    const searchCard = ( {item}) => (
    <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate(item.navigatehere, item.title)}>
                <Card.Title titleStyle={{fontSize: 24}} leftStyle={{marginRight: 20}} rightStyle={{marginRight: 30}}  title={item.Name}
                left={(props) => <Avatar.Image source={item.image} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} /> } />
    </TouchableOpacity>
        )
   
        const handleSearch = text => {
          const formattedQuery = text.toLowerCase();
          const filteredData = filter(searcharr, user => {
            return contains(user, formattedQuery);
          });
          setfulldata(filteredData);
          updatesearch(text);
        };
       
      const contains = ({ Name }, query) => {
        const name=Name.toLowerCase();
          if (name.includes(query) ) {
            return true;
          }
         
         return false;
       };

    return(
            <ScrollView>
     <SearchBar
        placeholder="Type Here..."
        onChangeText= {handleSearch}
        value={search}
      /> 
      <View style={Style.quick}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={fulldata}
          keyExtractor= { item => item.id}
          renderItem= {searchCard} /> 
          </View> 
        
        </ScrollView>
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
    
        },
        quick:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-evenly'
    
        }, 
    })