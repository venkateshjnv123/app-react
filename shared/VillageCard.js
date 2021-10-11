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
const VillageCard = ({ route }) => (
    <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <Card style= {styles.card}>
              <Card.Title titleStyle={styles.title} title={route.params.VillageId} subtitleStyle={styles.subtitlestyle} />

              <Card.Content>
                <Divider/>

                    <Text style={styles.texthead}> Sarpanch: <Text style={styles.textpara}  > {route.params.Sarpanch} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob1} </Text></Text>
                    
                    <Text style={styles.texthead}> Chokidar: <Text style={styles.textpara}> {route.params.Chokidar} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob2} </Text></Text>
                    <Text style={styles.texthead}> Depo-Holder: <Text style={styles.textpara}  > {route.params.Depo} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob3} </Text></Text>
                    <Text style={styles.texthead}> Secretary: <Text style={styles.textpara}  > {route.params.Secretary} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob4} </Text></Text>
                    <Text style={styles.texthead}> Nambedar: <Text style={styles.textpara}  > {route.params.Nambedar} </Text></Text>
                     <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob5} </Text></Text>
                    <Text style={styles.texthead}> Nambedar2: <Text style={styles.textpara}  > {route.params.Nambedar2} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob6} </Text></Text>
                    <Text style={styles.texthead}> Nambedar3: <Text style={styles.textpara}  > {route.params.Nambedar3} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob7} </Text></Text>
                    <Text style={styles.texthead}> Member: <Text style={styles.textpara}  > {route.params.Member} </Text></Text>
                    <Text style={styles.texthead}> Social: <Text style={styles.textpara}  > {route.params.Social} </Text></Text>
                    <Text style={styles.texthead}> Anganwaadi: <Text style={styles.textpara}  > {route.params.Anganwaadi} </Text></Text>
                    <Text style={styles.texthead}> Mobile: <Text style={styles.textpara}> {route.params.Mob8} </Text></Text>
                    <Text style={styles.texthead}> History: <Text style={styles.textpara}  > {route.params.History} </Text></Text>
               </Card.Content>
               </Card>
        
    </ScrollView>
  );

  export default VillageCard;

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
      fontSize: 30,
      fontFamily: 'courier,arial,helvetica'
    },
    subtitlestyle:{
        fontSize:15,
        justifyContent: 'center',
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