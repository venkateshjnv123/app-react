
//  import React from 'react';
//  import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';

//  export default function Blood({navigation}){
//      return(
//         <View>
//             <Text>Blood component</Text>
            
//          </View>
//      ); }

import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, ScrollView, SafeAreaView } from 'react-native';
import {SearchBar} from 'react-native-elements';
import filter from 'lodash.filter';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SelectDropdown from 'react-native-select-dropdown';
import firebase from 'firebase';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import dialCall from '../../shared/Makecall';

export default function Blood(){
    const [users, setusers] = useState()
    const [isloading, setisloading]= useState(false);
    const [search, setsearch] = useState('');
    const [fulldata, setfulldata]=useState();
    const [value, setvalue]=useState('all');
    const [liked, setliked]=useState(false);
    // var firebaseUrl = "https://app-dadri-default-rtdb.asia-southeast1.firebasedatabase.app/";
    // var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
    // var data = base.getData();
    const groups=['A+','B+','O+','AB+', 'all']

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.Name} - {item.Age}</Text>
            <Text>{item.Address}</Text>
          <Text style={{marginTop: 4}}>{item.Mobile} <Icon name='call' style={{textAlignVertical:'center'}} onPress={() => dialCall(item.Mobile)} size={20} /> </Text>
            <Text style={{fontWeight:'bold'}}>{item.Blood}</Text>
            
        </View>
      );
    
        // const printitem=()=>{
        //   firebase.database().ref('Blood').on('value', function (snapshot) {
        //       setfulldata(snapshot.val());
        //       fulldata.shift()
        //       setusers(fulldata)
        //   });
        // }
      
    

 const  getUsers = () => {
  firebase.database().ref('Data').child('Medical').child('Blood').on('value', function (snapshot) {
    
  setfulldata(snapshot.val());
  setusers(snapshot.val());
  setisloading(false);
 });
} 
        
   
    
     const handleSearch = text => {
         const formattedQuery = text.toLowerCase();
         const filteredData = filter(fulldata, user => {
           return contains(user, formattedQuery);
         });
         setusers(filteredData);
         setsearch(text);
       };
      
     const contains = ({ Name }, query) => {
       const name=Name.toLowerCase();
         if (name.includes(query) ) {
           return true;
         }
        
        return false;
      };

       const handleFilter = () => {
         const formattedQuery = value;
         if(formattedQuery==='all'){
           setusers(fulldata);
         }else{
         const filteredData = filter(fulldata, user => {
           return containsFilter(user, formattedQuery);
         });
         setusers(filteredData);
         setvalue(value);
        }
       };
      
     const containsFilter = ({ Blood }, query) => {
         if (Blood.includes(query) ) {
           return true;
        }
      
         return false;
       };


     useEffect( () => {
       setisloading(true);
       getUsers();

   }, []);



    const updatesearch = (search) => {
        setsearch(search)
    }
    return(
      <SafeAreaView>
        <View style={{alignItems:'center', flexShrink:0}}>

            {isloading ? <Text>Loading...</Text> : (
            <View style={{width:windowWidth/1.1}}>
            <Text>Blood donors</Text>
            <SearchBar   placeholder='search here' containerStyle={styles.searchbar} 
            inputContainerStyle={{backgroundColor: '#fff', height:windowHeight/15}} 
            inputStyle={{color: 'black'}}
            onChangeText={handleSearch} value={search} />
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
            data={users}
            keyExtractor= { item => item.No}
            renderItem= { renderItem} />  
            </View>
            )
            }
        </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    item: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth:3,
        elevation:10,
        fontSize: 18,
        borderRadius:40,
        alignItems: 'center',
        backgroundColor: '#52ed2f',
        justifyContent:'center',
        padding:10
    },
    searchbar: {
      backgroundColor :'#fff',
      height:windowHeight/15,
      justifyContent:'center',
      borderColor: '#db00be',
       borderWidth: 2,
       borderRadius: 20
      
      

    },
    dropdown:{
        width: windowWidth/2,
        marginTop: 10,
    },
    dropdown1:{
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 10,
    }
});