
import React, {useState} from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Formik } from 'formik';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import axios from 'axios';
const Title_id='entry.1649443287'
const body_id='entry.12237952'
const contact_id = 'entry.787388757'
const Url='https://docs.google.com/forms/d/e/1FAIpQLSdTHUMkoYwgyDXmHIhqt9i_cUOA4mXm35t3XWNlwi7Fs2jjnQ/formResponse'

export default function Report() {
  const [data, setdata] = useState('');

  const sendmessage =(title, body, contact)=> {
    const formData= new FormData()
    formData.append(Title_id, title)
    formData.append(body_id, body)
    formData.append(contact_id, contact)
    axios.post(Url,formData).then( () => {
       setdata('Your form submitted successfully....thanks for helping!')
    }).catch( (error)=> {
      setdata('your form not submitted', error)
    })
  }

  return (
    
    <View style={{alignItems:'center'}} >
      <Text style={{ color: 'red', fontSize: 16}}>{data}</Text>
      <Formik
        initialValues={{ title: '', body: '', contact: ''}}
        onSubmit={ (values, actions) => {
          sendmessage(values.title, values.body, values.contact);
          actions.resetForm();
        }}
       
      >
        {props => (
          <View style={styles.form}>
            <TextInput
              placeholder='Your Name(required)'
              style={styles.box}
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              
            />
            <TextInput
              multiline
              placeholder='Complaint(required)'
              style={styles.box}
              multiline
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              multiline
              placeholder='phone or email(required)'
              style={styles.box}
              onChangeText={props.handleChange('contact')}
              value={props.values.contact}
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}

const styles= StyleSheet.create(
  {
    form: {
      width: windowWidth/1.1 ,
      alignContent:'center',
      marginHorizontal: 10,
    },
    box: {
      marginVertical: 10,
      elevation: 3,
      height: 60,
      alignItems:'center',
      alignContent:'center',
      paddingHorizontal: 20,}
  }
)