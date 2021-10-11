
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, useWindowDimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider} from 'react-native-paper';
import firebase from 'firebase';
import Hoscard from '../../shared/Hoscard';
import windowWidth from '../../shared/Dimensions';
export default function Hospitals({navigation}){
    const [data, setdata] = useState();
    const [loading, setisloading]=useState(false);
    const [child , setchild]=useState('Hospital')
    const  getUsers = () => {
      firebase.database().ref('Data').child('Medical').child(child).on('value', function (snapshot) {
setdata(snapshot.val());

setisloading(false);
});
} 
useEffect( () => {
  setisloading(true);
  getUsers();
}, []);

const renderItem = ({ item }) => (
  // <View style= {styles.card}>
  //       <Card>
  //           <Card.Title titleStyle={styles.title} title={item.Name} subtitle={item.Time}/>
  //           <Card.Cover style={{height:140}} source={require('../images/hospital.png')} />
  //           <Card.Content>
  //             <Divider/>
  //             <Text  style={{fontSize: 16, fontWeight: 'bold'}} > Rating : 4.5/5</Text>
  //                 <Text style={{fontSize: 16, fontWeight: 'bold'}}> Description: <Text style={{fontWeight:'normal', fontFamily:'calibri'}} > {item.Description} </Text></Text>
  //                 <Text style={{fontSize: 16, fontWeight: 'bold'}}> Address: <Text style={{fontWeight:'normal', fontFamily:'calibri'}}>{item.Address} </Text></Text>
  //                 <Text style={{fontSize: 16, fontWeight: 'bold'}}> Mobile: <Text style={{fontWeight:'normal', fontFamily:'calibri'}}> {item.Call} </Text></Text>
  //            </Card.Content>
    
  // </Card> 
      
  // </View>
  <View>
 {/* <TouchableOpacity onPress={()=>navigation.navigate('Hoscard', item)}>
   <View style={styles.card3}>
     <Text>{item.Name}</Text>
   </View>
 </TouchableOpacity> */}

             <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Hoscard', item)}>
             <Card.Title titleStyle={{fontSize: 21}} rightStyle={{marginRight: 30}}  title={item.Name}
             subtitle={item.Time} subtitleStyle={{fontSize:14}}
              right={(props) =>  <Avatar.Image source={require('../../images/arrow_2.png')} {...props} /> } />
        </TouchableOpacity>
     </View>
);

    return(
      <SafeAreaView>
      <View style={{alignItems:'center', flexShrink:0}}>

          {loading ? <Text>Loading...</Text> : (
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
  card: {
    marginTop: 20,
    backgroundColor:'rgb(200,200,200)',
    elevation:5,
    borderRadius: 20,
    width:windowWidth/1.2 ,
    alignContent:'center',
    justifyContent:'center'

  },
  title:{
    fontSize: 24,
    fontStyle:'italic',
  }


    
})