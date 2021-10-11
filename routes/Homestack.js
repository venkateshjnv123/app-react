import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import { Icon } from 'react-native-elements'
import Home from '../screens/Home';
import Blood from '../screens/Medical/Blood';
import { useState } from 'react/cjs/react.development';
import { Alert , View} from 'react-native';
import Medicalstack from '../routes/Medicalstack';
import Medlabs from '../screens/Medical/Medlabs';
import Hospitals from '../screens/Medical/Hospitals';
import Medical from '../screens/Medical/Medical';
import Government from '../screens/Government';
import Utilities from '../screens/Utilities';
import Onboard from '../screens/Login/Onboarding';
import Login from '../screens/Login/Login';
import Signup from '../screens/Login/Signup';
import Drawernav from './Maindrawer';
import GovernmentDetails from '../screens/Government_details';
import { DrawerActions } from '@react-navigation/routers';
import { useNavigation } from '@react-navigation/native';
import UtilityDetails from '../screens/Utility_departments';
import Details from '../screens/Listdetails';
import Hoscard from '../shared/Hoscard';
import Villages, { Activesearch } from '../screens/Villages';
import Department from '../screens/Departments';
import DepartmentCard from '../shared/DepartmentCard';
import Market from '../screens/MarketItems';
import Aboutdadri from '../screens/Aboutdadri';
import MarketDetails from '../screens/Detailsmarket';
import Restaurents from '../screens/Hotel';
import Education from '../screens/Education';
import Automobile from '../screens/Automobile';
import Homeservice from '../screens/Homeservice';
import Travel from '../screens/Travel';
import Realestate from '../screens/Realestate';
import Social from '../screens/Social';
import Press from '../screens/Press';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header} from '../shared/Header';
import Search from '../screens/Search';
import VillageCard from '../shared/VillageCard';
import Traveldetails from '../screens/Traveldetails';
const Stack = createStackNavigator()

export default function Homestack({navigation}) {
   const navigate1=useNavigation()
   const search = () => {
       console.log('hello')
   }
    return (
    <Stack.Navigator screenOptions = {{
        headerStyle :{
            backgroundColor: '#068dba',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
       
    }} >
    <Stack.Screen name="Home" component={Home} 
    options={{
        title : ' Charkhi Dadri',
        headerLeft : () => (
            <Icon.Button name="menu" size={28} backgroundColor="#068dba" onPress ={() =>{navigate1.openDrawer()}}></Icon.Button>
        ),
        headerRight: () => (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress ={() =>{search()}}>
            <Icon.Button name="search" size={28} backgroundColor="#068dba" onPress={() => {navigate1.navigate('Search')}} ></Icon.Button>
            </TouchableOpacity>
            <Icon.Button name="person-add" size={28} backgroundColor="#068dba" onPress ={() =>{search()}}></Icon.Button>
            </View>

        )
    }}/>
    <Stack.Screen name='Blood' component={Blood}/>
    <Stack.Screen name='Medical' component={Medical}/>
    <Stack.Screen name='Hospitals' component={Hospitals}/>
    <Stack.Screen name='Medlabs' component={Medlabs}
    options={({ route }) => ({ title: route.params.child})}/>
    <Stack.Screen name='Government' component={Government}/>
    <Stack.Screen name='Utilities' component={Utilities}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Signup' component={Signup}/>
    <Stack.Screen name='onboard' component={Onboard}/>
    <Stack.Screen name='details' component={GovernmentDetails}
     options={{
        title : 'Hold the Help' ,
    }}/>
    <Stack.Screen name='utilitydetails' component={UtilityDetails}
     options={{
        title : 'Get the Help' ,
    }}/>
      <Stack.Screen name='Details' component={Details}
      options={{
         title : 'Details' ,
     }}/>
     <Stack.Screen name='MarketDetails' component={MarketDetails}/>
     <Stack.Screen name='Traveldetails' component={Traveldetails}/>
     <Stack.Screen name='Hoscard' component={Hoscard}
     options={{
        title : 'Hospital-Details' ,
    }}/>
    <Stack.Screen name='Villages' component={Villages} 
    options={{
      headerRight: props => <Activesearch {...props} compon={Villages} setdata={Villages.setdata} fulldata={Villages.fulldata} />    }}
    />
    <Stack.Screen name='Department' component={Department} 
    options={{
        headerRight: () => ( <Icon size={28} backgroundColor="#068dba" color='#fff' style={{marginRight: 30}} name='search' />
            )    }}/>
    <Stack.Screen name='Aboutdadri' component={Aboutdadri} 
    options={{
        headerRight: () => ( <Icon size={28} backgroundColor="#068dba" color='#fff' style={{marginRight: 30}} name='search' />
            )    }}/>
    
    <Stack.Screen name='DepartmentCard' component={DepartmentCard}
     options={{
        title : 'Department-Details' ,
    }}/>
     <Stack.Screen name='Restaurents' component={Restaurents}/>
     <Stack.Screen name='Education' component={Education}/>
     <Stack.Screen name='Automobile' component={Automobile}/>
     <Stack.Screen name='Homeservice' component={Homeservice}/>
     <Stack.Screen name='Travel' component={Travel}/>
     <Stack.Screen name='Realestate' component={Realestate}/>
     <Stack.Screen name='Press' component={Press}/>
     <Stack.Screen name='Social' component={Social}/>
     <Stack.Screen name='Search' component={Search} />
<Stack.Screen name='VillageCard' component={VillageCard} />
     <Stack.Screen name='Market' component={Market}
     options={{
        title : 'Market' ,
        headerRight: () => ( <Icon size={28} backgroundColor="#068dba" color='#fff' style={{marginRight: 30}} name='search' />)
    }}/>
     </Stack.Navigator>
    )

}
