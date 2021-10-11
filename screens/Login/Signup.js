
import React,{useState, useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,ScrollView,  Button , Image} from 'react-native';
import { AuthContext } from '../../routes/Authprovider';
import FormButton from '../../shared/Buttons';
import FormInput from '../../shared/FormInput';
import SocialButton from '../../shared/SocialButton';
export default function Signup({navigation}){
    const [email, setemail]=useState();
    const [password, setpassword]=useState();
    const [confpassword, setconfpassword]=useState();
    const [number, setnumber]=useState();
    const [name, setname]=useState();
    const {register} =useContext(AuthContext)

    return(
            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput labelvalue={email} 
             onChangeText={(useremail) => setemail(useremail)}
             icontype='person' 
             placeholder='enter your usernmae' 
             keyboardType='email-address' 
             autocapitalize='none' 
             autoCorrect={false} />
            <FormInput labelvalue={password}
            onChangeText={(userpassword) => setpassword(userpassword)}
            icontype='lock' 
            placeholder='password' 
            secureTextEntry={true} /> 
            <FormInput labelvalue={confpassword}
            onChangeText={(userconfpassword) => setconfpassword(userconfpassword)}
            icontype='lock' 
            placeholder='confirm password' 
            secureTextEntry={true} /> 
            <FormInput labelvalue={number}
            onChangeText={(phonenumber) => setnumber(phonenumber)}
            icontype='phone'
            keyboardType='number-pad' 
            placeholder='phone number' 
             /> 
             <FormInput labelvalue={name}
            onChangeText={(myname) => setname(myname)}
            icontype='perm_identity'
            placeholder='name' 
             /> 
            <FormButton title='Sign Up'
            onPress={() => register(email, password, number, name)} />
            <Text>By clicking u agree to terms of privacy and privacy policy.</Text>
            <TouchableOpacity style={styles.forgotButton}>
                <Text onPress={() => navigation.navigate('Login')} style={styles.navButtonText} > have an account! login here </Text>
            </TouchableOpacity>

          <View>
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
            </ScrollView>
    ); }


    const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          paddingTop: 50
        },
        logo: {
          height: 150,
          width: 150,
          resizeMode: 'cover',
        },
        text: {
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 28,
          marginBottom: 10,
          color: '#051d5f',
        },
        navButton: {
          marginTop: 15,
        },
        forgotButton: {
          marginTop: 20,
        },
        navButtonText: {
          fontSize: 18,
          fontWeight: '500',
          color: '#2e64e5',
          fontFamily: 'Lato-Regular',
        },
      });