
import React,{useContext, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,ScrollView,  Button , Image} from 'react-native';
import { AuthContext } from '../../routes/Authprovider';
import FormButton from '../../shared/Buttons';
import FormInput from '../../shared/FormInput';
import SocialButton from '../../shared/SocialButton';
import { SocialIcon } from 'react-native-elements';
export default function Login({navigation}){
    const [email, setemail]=useState();
    const [password, setpassword]=useState();
    const {login, googleLogin, fblogin, googleRegister, fbRegister}=useContext(AuthContext);

    return(
            <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={require('../../images/logo4.png')} />
            <Text style={styles.text}>Charkhi dadri</Text>
             {/* <FormInput labelvalue={email} 
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
            <FormButton title='Login'
            onPress={() => login(email, password)} />
            <TouchableOpacity style={styles.forgotButton} >
                <Text onPress={() => alert('forgot password')} style={styles.navButtonText} > forgot password </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotButton}>
                <Text onPress={() => navigation.navigate('Signup')} style={styles.navButtonText} > Dont have an account? register here </Text>
            </TouchableOpacity> */}
          <View>

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#104eb3"
            backgroundColor="#6bc5f2"
            onPress={() => fblogin()}
          />
        </View>
        <Text style={{marginTop:20, fontSize:24, fontWeight:'bold'}}>Or </Text>
        <Text style={{fontSize: 17, marginTop: 5}}> first time to the app?</Text>
        <Text style={{fontSize: 17, marginTop: 5}}> don't have account register here</Text>
        <View style={styles.social} >
          <SocialIcon style={styles.socialbutton} button type='google' onPress={()=>googleRegister()} />
          <SocialIcon style={styles.socialbutton} button type='facebook' onPress={()=>googleRegister()} />
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
        social:{
          flexDirection: 'row',
          margin: 20
        },
        socialbutton:{
          margin: 20,
          width: 80,
        }
      });