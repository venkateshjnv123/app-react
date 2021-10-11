import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FormButton = ({ title, ...props}) =>{
  return (
      <TouchableOpacity style={styles.buttonContainer} {...props}>
          <Text style={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
  )
}

export default FormButton;
const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
    },

  });