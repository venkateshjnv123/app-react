import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider} from 'react-native-paper';
import windowWidth from './Dimensions';
import { BackgroundCarousel } from './Backgroundcarousal';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dialCall from '../shared/Makecall';
const images1=[
    require('../images/hospital.png'),
    require('../images/hospital2.png')

]
const Hoscard = ({ route }) => (
    <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <Card style= {styles.card}>
              <Card.Title titleStyle={styles.title} title={route.params.Name} subtitleStyle={styles.subtitlestyle} subtitle={route.params.Time}/>
              <BackgroundCarousel images={images1}/>
              <Card.Content>
                <Divider/>
                <Text  style={styles.texthead} > Rating : 4.5/5</Text>
                    <Text style={styles.texthead}> Description: <Text style={{fontFamily:'KruthiDev010'}} > {route.params.Description} </Text></Text>
                    <Text style={styles.texthead}> Address: <Text style={styles.textpara}>{route.params.Address} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Call} </Text> <Icon name='call' style={{textAlignVertical:'center'}} onPress={() => dialCall(item.Mobile)} size={20} /></Text>
               </Card.Content>
               </Card>
        
    </ScrollView>
  );

  export default Hoscard;

  const styles= StyleSheet.create({
    card: {
      marginTop: 20,
      alignItems:'center',
      justifyContent:'center',
      width:windowWidth/1.1,
      elevation: 20,
      borderRadius: 20,
      marginHorizontal: 20,
  
    },
    title:{
      fontSize: 24,
      fontFamily: 'courier,arial,helvetica'
    },
    subtitlestyle:{
        fontSize:15,
    },
    texthead:{
        fontSize: 17, 
        fontWeight: 'bold',
        fontFamily:'courier,arial,helvetica',
        marginVertical:5,
},
textpara:{
    fontWeight:'normal',
    fontFamily:'calibri'

}
  
  
      
  })