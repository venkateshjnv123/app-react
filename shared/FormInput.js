import React from 'react';
import {Text, TouchableOpacity,View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const FormInput = ({labelvalue, placeholder, icontype, ...rest}) => {
    return(
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <Icon name={icontype} size={25} />

            </View>
            <TextInput 
            style={styles.input}
            value={labelvalue}
            numberOfLines={1}
            placeholder={placeholder}
            {...rest}
            />
        </View>
    )
}
export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
  });