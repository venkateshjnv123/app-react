 import { styles } from 'ansi-colors';
 import React, { Component } from 'react';
 import { StyleSheet, View } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';

 export default function Header({title, navigation,}) {

     return(
         <View style={style1.header}>
             <Icon name='arrow-back' size={25}/>
             <View>
                 <Text style={styles.headerText}> {title} </Text>
             </View>
             <MaterialIcons name='search' size={28} />
             <MaterialIcons name='Person add' size={28}/>
         </View>
     )
 };

 const style1 = StyleSheet.create({
     header: {
       width: '100%',
       height: '100%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
     },
     headerText: {
       fontWeight: 'bold',
       fontSize: 20,
       color: '#333',
       letterSpacing: 1,
     },
     icon: {
       position: 'absolute',
       left: 16,
     }
   });