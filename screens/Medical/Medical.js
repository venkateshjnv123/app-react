
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
// import {Card} from 'react-native-elements';
import {Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Medical({navigation}){


    return(
        <View style={{flexDirection:'column',flex:1,margin:'auto',justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Hospitals')}>
                <Card.Title titleStyle={{fontSize: 24}} leftStyle={{marginRight: 20}} rightStyle={{marginRight: 30}}  title="Hospitals"
                left={(props) => <Avatar.Image source={require('../../images/medical_2.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../../images/arrow_2.png')} {...props} /> } />
            </TouchableOpacity>
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Medlabs', {title: 'Medical', child:'Medicalstore'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}    title="Medical Stores"
                left={(props) => <Avatar.Image source={require('../../images/Medical_1.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity> 
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Medlabs', {title: 'Medical', child:'Lab'})}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}  title="Medical labs"
                left={(props) => <Avatar.Image  source={require('../../images/Medilab.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity> 
            <TouchableOpacity style={Style.card} onPress={()=> navigation.navigate('Blood')}>
                <Card.Title titleStyle={{fontSize: 24}} rightStyle={{marginRight: 30}} leftStyle={{marginRight: 20}}  title="Blood donor"
                left={(props) => <Avatar.Image  source={require('../../images/blood.png')} {...props} />}
                right={(props) =>  <Avatar.Image source={require('../../images/arrow_2.png')} {...props} />}/>
            </TouchableOpacity> 

{/* <Card>
  <Card.Title>Medical details</Card.Title>
  <Card.Divider/>
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card> */}
            
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
