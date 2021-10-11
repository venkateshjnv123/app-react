import React, { useContext } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContent
  } from '@react-navigation/drawer';
import { View,StyleSheet,ImageBackground  , Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Drawer } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { AuthContext } from './Authprovider';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

  export function Drawercontent(props){
    const {user, logout}=useContext(AuthContext);
    return(
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
   <View style={styles.drawerc}>
     <ImageBackground resizeMode='cover' style={{width: windowWidth/1.6, height:200, alignItems:'center'}} source={require('../images/logo4.png')}>
     </ImageBackground>
    <Text style={styles.head} > Charkhi Dadri</Text>
     
     
   </View>
   <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem icon={({color, size}) => (
            <Icon name='home' color={color} size={size}/>
          )}
          label="Home"
          onPress={() => {props.navigation.navigate('Home')}} />
          <DrawerItem icon={({color, size}) => (
            <Icon name='help' color={color} size={size}/>
          )}
          label="About"
          onPress={() => {props.navigation.navigate('About')}} />
          <DrawerItem icon={({color, size}) => (
            <Icon name='report-problem' color={color} size={size}/>
          )}
          label="Report"
          onPress={() => {props.navigation.navigate('Report')}} />
          <DrawerItem icon={ ({color ,size}) => (
            <Icon name='logout' color={color} size={size}/>
          )} label = 'log-out'
          onPress={() => logout()}/>
        </Drawer.Section>
        </DrawerContentScrollView>
        
      </View>    )
      
  }

const styles= StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},
 drawerc : {
   width: windowWidth/1.6,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
 },
 head: {
   fontSize: 30,
   fontFamily: 'Courier-New', 
   marginBottom: 10,
   marginTop: -30,
   color:'black'
 },
 head1 : {
   fontSize: 25,
   marginTop: 20,
 }
})