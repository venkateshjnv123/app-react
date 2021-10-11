
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, SafeAreaView, useWindowDimensions } from 'react-native';
import { Avatar, Card, Title, Paragraph, Divider} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import firebase from 'firebase';
import filter from 'lodash.filter';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import Hoscard from '../shared/Hoscard';
import { Dimensions } from 'react-native';
import {useSelector} from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import dialCall from '../shared/Makecall';



export function Activesearch({fulldata1}, setdata1){
  const [active, setactive]=useState(false);
  const [search, setsearch] = useState('');
  const [user, setusers] = useState();
  const fulldata={fulldata1}
  const handleSearch = (text) => {
    console.log(fulldata);
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fulldata, user => {
      return contains(user, formattedQuery);
    });
    setdata1(filteredData);
    
    setsearch(text);
  };
  
  const contains = ({ VillageId }, query) => {
  const name=VillageId;
    if (name.includes(query) ) {
      return true;
    }
     return false;
    }

  const activee = () => {
    setactive(!active);
    console.log(active);
  }
  return(
    <View>{
      active ? <TextInput style={styles.input} onChangeText={handleSearch} value={search}
      placeholder='text'/> : (<Icon size={28} backgroundColor="#068dba" color='#fff' onPress={activee} style={{marginRight: 30}} name='search' />)}
      
            
    </View>
  )

}


export default function Villages({navigation}){
    const [data, setdata] = useState();
    const [fulldata, setfulldata] = useState();
    const [loading, setisloading]=useState(false);
    const [value, setvalue]=useState('all');
    const groups=[ 'all', 'Badhra', 'Bondkalan ST', 'Dadri']
    const  getUsers = () => {
      firebase.database().ref('Data').child('Village').on('value', function (snapshot) {
setdata(snapshot.val());
setfulldata(snapshot.val());
setisloading(false);

});
} 
const handleFilter = () => {
  const formattedQuery = value;
  if(formattedQuery==='all'){
    setdata(fulldata);
  }else{
  const filteredData = filter(fulldata, user => {
    return containsFilter(user, formattedQuery);
  });
  setdata(filteredData);
  setvalue(value);
 }
};

const containsFilter = ({ Block }, query) => {
  if (Block.includes(query) ) {
    return true;
 }

  return false;
};


useEffect( () => {
  setisloading(true);
  getUsers();
  console.log(fulldata)
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
  <TouchableOpacity onPress={ ()=>navigation.navigate('VillageCard', item)}>
  <View style={styles.card} >
 {/* <TouchableOpacity onPress={()=>navigation.navigate('Hoscard', item)}>
   <View style={styles.card3}>
     <Text>{item.Name}</Text>
   </View>
 </TouchableOpacity> */}

             
             <Text>{item.VillageName}</Text>
             <Text style={styles.title}>{item.VillageId}</Text>
             <Text>{item.Block}</Text>
     </View>
     </TouchableOpacity>
);

    return(
      <SafeAreaView>
      <View style={{alignItems:'center', flexShrink:0}}>

          {loading ? <Text>Loading...</Text> : (
            <View>
<View style={{flexDirection:'row', justifyContent:'space-evenly', height: 50, alignItems:'center'}}>
<SelectDropdown
            dropdownStyle={styles.dropdown}
            buttonStyle={styles.dropdown1}
            rowStyle={{width: windowWidth/2}}
	          data={groups}
	          onSelect={(selectedItem) => {
		        setvalue(selectedItem)
	          }}
            />
            <Button onPress={handleFilter} style={{ width: 0, height: 20,  }} title='filter'/> 
            </View>
          <FlatList 
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor= { item => item.No}
          renderItem= { renderItem} />  
          </View>
          )
          }
      </View>
      <Activesearch fulldata1={fulldata} setdata1={setdata} />
      </SafeAreaView>
    ); }

const styles= StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor:'rgb(200,200,200)',
    elevation:5,
    borderRadius: 20,
    width:windowWidth/1.2 ,
    alignItems:'center',
    justifyContent:'center'

  },
  title:{
    fontSize: 20,
  },
  dropdown:{
    width: windowWidth/2.4,
    marginTop: 10,
},
dropdown1:{
  borderColor: 'black',
  borderWidth: 2,
  marginTop: 10,
},
input: {
  color: 'white'
}


    
})