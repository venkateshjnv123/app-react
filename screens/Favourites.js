
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Favourites({navigation}){
    const [fulldata, setfulldata]=useState([]);

    const likedarr= [
        {id:1, navigatehere: 'Automobile',title:{title: 'Automobile'}, image: require('../images/automob.png') , Name:'Automobile', liked: false},
        {id:2, navigatehere: 'Details',title:{title: 'city-search'}, image: require('../images/globe.png') , Name:'City-search', liked: true},
        {id:3, navigatehere: 'Education',title:{title: 'Education'}, image: require('../images/education.png') , Name:'Education', liked: true},
        {id:4, navigatehere: 'Details',title:{title: 'Entertainment'}, image: require('../images/entertainment.png') , Name:'Entertainment', liked: true},
        {id:5, navigatehere: 'Restaurents',title:{title: 'Restaurens'}, image: require('../images/food.png') , Name:'Restaurents', liked: true},
        {id:6, navigatehere: 'Travel',title:{title: 'Travel'}, image: require('../images/travel.png') , Name:'Travel', liked: true},
        {id:7, navigatehere: 'Details',title:{title: 'Tourism'}, image: require('../images/travel.png') , Name:'Tourism', liked: true},
        {id:8, navigatehere: 'Details',title:{title: 'About-app'}, image: require('../images/info.png') , Name:'App-info', liked: true},
        {id:9, navigatehere: 'Aboutdadri',title:{title: 'About-dadri'}, image: require('../images/logo.png') , Name:'About', liked: true},
        {id:10, navigatehere: 'Homeservice',title:{title: 'Home-services'}, image: require('../images/realestate.png') , Name:'Home-services', liked: true},
        {id:11, navigatehere: 'Press',title:{title: 'Press'}, image: require('../images/press.png') , Name:'Press-media', liked: true},
        {id:12, navigatehere: 'Realestate',title:{title: 'About-dadri'}, image: require('../images/realestate1.png') , Name:'Real-estate', liked: true},
        {id:13, navigatehere: 'Social',title:{title: 'About-dadri'}, image: require('../images/ngo3.png') , Name:'Social', liked: true},
        {id:14, navigatehere: 'Government', title:{title: 'Automobile'}, image: require('../images/government_haryana.png'), Name:'Government', liked: true},
        {id:15, navigatehere: 'Market', title:{title: 'Automobile'},image: require('../images/market4.png'), Name:'Market', liked: true},
        {id:16, navigatehere: 'Medical',title:{title: 'Automobile'}, image: require('../images/medical_2.png'), Name:'Medical', liked: true},
        {id:17, navigatehere: 'Utilities',title:{title: 'Automobile'}, image: require('../images/utility4.png') , Name:'Utilities', liked: true},
        {id:18, navigatehere: 'Blood',image: require('../images/blood.png') , Name:'Blood', liked: true},
        {id:19, navigatehere: 'Hospitals',image: require('../images/hospital.png') , Name:'Hospital', liked: true},
        {id:20, navigatehere: 'Medlabs',title:{title: 'Medical', child:'Lab'}, image: require('../images/Medilab.png') , Name:'Medical-lab', liked: true},
        {id:21, navigatehere: 'Medlabs',title:{title: 'Medical', child:'Medicalstore'}, image: require('../images/Medical_1.png') , Name:'Medical-store', liked: true},
    ]

    
    const searchCard = ( {item}) => (
        <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate(item.navigatehere, item.title)}>
                    <Card.Title titleStyle={{fontSize: 24}} leftStyle={{marginRight: 20}} rightStyle={{marginRight: 30}}  title={item.Name}
                    left={(props) => <Avatar.Image source={item.image} {...props} />}
                    right={(props) =>  <Avatar.Image source={require('../images/arrow_2.png')} {...props} /> } />
        </TouchableOpacity>
            )
       

        const handleliked = () => {
            for(var i=0; i<likedarr.length; i++){
                if(likedarr[i]['liked']===true){
                    fulldata.push(likedarr[i]);
                }
                

            }
        }
useEffect( ()=> {
handleliked();
})
 
    return(
        <View>
         <FlatList 
          showsVerticalScrollIndicator={false}
          data={fulldata}
          keyExtractor= { item => item.id}
          renderItem= {searchCard} /> 
            
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
    
        },
    })