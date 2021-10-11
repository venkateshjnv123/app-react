/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React,{useState, useEffect} from 'react';
 import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import Home from './screens/Home';
import About from './screens/About';
import Homestack from './routes/Homestack';
import MyTabs from './routes/Maintabscreen';
import Aboutstack from './routes/Aboutstack';
import Reportproblem from'./routes/Reportproblem.js' ;
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Drawercontent} from './routes/Drawercontent.js' ;
import LoginStack from './routes/Loginstack';
import Drawernav from './routes/Maindrawer';
import Routes from './routes/Routes';
import { AuthProvider } from './routes/Authprovider';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

function App() {

  // async componentWillMount() {
  //   //called before render, will automatically be called because it's a life cycle method
  //  await firebase.initializeApp({
  //     apiKey: 'AIzaSyCZE29Rg6ALSNpJ1FOI8Q63Xz0zakd6W_Q',
  //     authDomain: 'app-dadri-58756.firebaseapp.com',
  //     databaseURL: 'https://app-dadri-58756-default-rtdb.asia-southeast1.firebasedatabase.app',
  //     projectId: 'app-dadri-58756',
  //     storageBucket: 'app-dadri-58756.appspot.com',
  //     messagingSenderId: '267808719577'
  // });
  // }
  //  const [firstlaunch, setfirstlaunch]= useState(null);
  //  const [user, setuser] =useState(false);
  //  useEffect(() => {
  //    AsyncStorage.getItem('alreadylaunched').then(value => {
  //      if(value==null) {
  //         AsyncStorage.setItem('alreadylaunched', 'true');
  //         setfirstlaunch(true);
  //      }
  //      else{
  //        setfirstlaunch(false);
  //      }
  //    })
  //  }, [])

  //  if (firstlaunch ===null){
  //    return null
  //  }
  //  else if (firstlaunch===true){
  //    return (
  //    <LoginStack/>
  //    )
  //  }
  //  else {
  //   return (
  //     <NavigationContainer>
      
  //       {/* <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <Drawercontent {...props}/>} >
  //       <Drawer.Screen options={{headerStyle: {backgroundColor: 'blue',}, headerTintColor:'#fff'}} name="Home" component={MyTabs} />
  //       <Drawer.Screen options={{headerStyle: {backgroundColor: 'red',}}} name="About" component={Aboutstack} />
  //       <Drawer.Screen options={{headerStyle: {backgroundColor: 'red',}}} name="Report" component={Reportproblem} />
  //     </Drawer.Navigator> */}
  //     {user ? <Drawernav/> : <LoginStack/>}

  //    </NavigationContainer>
  //   // <View>
  //   //   <Text> hello world </Text>
  //   // </View>
  //  )

  //  }

return (

  <AuthProvider>
  <Routes />
</AuthProvider>
)
 
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 
