import React, {useContext, useState, useEffect} from 'react';
import  {NavigationContainer } from '@react-navigation/native';
import LoginStack from './Loginstack';
import auth from '@react-native-firebase/auth' ;
import  {AuthContext} from './Authprovider' ;
import Login from '../screens/Login/Login';
import MyTabs from './Maintabscreen';
import Drawernav from './Maindrawer';
const Routes =() => {

    const {user, setuser} =useContext(AuthContext);
    const [initial, setinitial] =useState(true);

    const onAuthStateChanged =(user) => {
        setuser(user);
        if(initial) setinitial(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []) ;

    if(initial) return null ;
    return (
        <NavigationContainer>
            {user ? <Drawernav/> : <LoginStack/>}
        </NavigationContainer>
    )
}

export default Routes;