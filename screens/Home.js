
import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button , Image, ScrollView} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Card , Title} from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Carousal from './Carousal';
import { Divider } from 'react-native-paper';
import { BackgroundCarousel } from '../shared/Backgroundcarousal';
import Addcard from './AddCard';
const images1=[
    require('../images/charkhidadri1.png'),
    require('../images/carousal_7.png'),
    require('../images/carousal_1.png'),
    require('../images/carousal_2.png'),
    require('../images/carousal_4.png'),
    require('../images/carousal_5.png'),
    require('../images/carousal_6.png'),
    
]



export default function Home({navigation}){
    // const [category, setcategory] =useState([
    //     {blood: {title: 'Blood Donor',path: '../images/blood.jpg', key: 1}},
    //     {medical : {title: ' Medical',path: '../images/medical.jpg', key:2}},
    //     {uty: {title: 'utilities',path: '../images/utility.jpg', key:3}},
    //     {police :{title: 'police',path: '../images/police.jpg', key:4}}
    // ])
    const Quickusable =[
        {id:1, navigatehere: 'Government', image: require('../images/government_haryana.png'), Name:'Government'},
        {id:2, navigatehere: 'Market', image: require('../images/market4.png'), Name:'Market'},
        {id:3, navigatehere: 'Medical', image: require('../images/medical_2.png'), Name:'Medical'},
        {id:4, navigatehere: 'Villages', image: require('../images/villages.png') , Name:'Villages'},
    ]
    
    const Sortedlist= [
        
        {id:1, navigatehere: 'Automobile',title:{title: 'Automobile'}, image: require('../images/automob.png') , Name:'Automobile'},
        {id:2, navigatehere: 'Details',title:{title: 'city-search'}, image: require('../images/globe.png') , Name:'City-search'},
        {id:3, navigatehere: 'Education',title:{title: 'Education'}, image: require('../images/education.png') , Name:'Education'},
        {id:4, navigatehere: 'Details',title:{title: 'Entertainment'}, image: require('../images/entertainment.png') , Name:'Entertainment'},
        {id:5, navigatehere: 'Restaurents',title:{title: 'Restaurens'}, image: require('../images/food.png') , Name:'Restaurents'},
        {id:6, navigatehere: 'Travel',title:{title: 'Travel'}, image: require('../images/travel.png') , Name:'Travel'},
        {id:7, navigatehere: 'Details',title:{title: 'Tourism'}, image: require('../images/travel.png') , Name:'Tourism'},
        
        {id:10, navigatehere: 'Homeservice',title:{title: 'Home-services'}, image: require('../images/realestate.png') , Name:'Home-services'},
        {id:11, navigatehere: 'Press',title:{title: 'Press'}, image: require('../images/press.png') , Name:'Press-media'},
        {id:12, navigatehere: 'Realestate',title:{title: 'About-dadri'}, image: require('../images/realestate1.png') , Name:'Real-estate'},
        {id:13, navigatehere: 'Social',title:{title: 'About-dadri'}, image: require('../images/ngo3.png') , Name:'Social'},
        {id:8, navigatehere: 'Details',title:{title: 'About-app'}, image: require('../images/info.png') , Name:'App-info'},
        {id:9, navigatehere: 'Aboutdadri',title:{title: 'About-dadri'}, image: require('../images/logo.png') , Name:'About'},
        ]

    const sortedcard =({item}) => (
        <View style={Style.listitem}>
            <Avatar size= {60} rounded source={item.image} onPress={()=>navigation.navigate(item.navigatehere,item.title)} />
            <Text style={{fontSize: 14}}>{item.Name}</Text>
            </View>

    )
    
    const Quickcard =({item}) => (
        <TouchableOpacity onPress={()=> navigation.navigate(item.navigatehere)}>
        <Card style={Style.card}>
            <Card.Cover source={item.image} style={Style.cover}/>
             <Card.Content style={Style.content} >
                <Title  style={{fontSize: 16}}>{item.Name}</Title>
            </Card.Content>
        </Card>
    </TouchableOpacity>
    
    )
    const blood = {title: 'Blood Donor',path: '../images/blood.png', key: 1}
    return(
        <View style={{flex:1, marginLeft:10, marginRight:10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundCarousel images={images1} />
        <Divider/>
        <View style= {Style.container}>
            <Text style={Style.head}>Quick usables</Text>
            <View style={Style.quick} >
            <FlatList 
            contentContainerStyle={Style.quick}
          showsVerticalScrollIndicator={false}
          data={Quickusable}
          keyExtractor= { item => item.id}
          renderItem= {Quickcard} />  

        {/* <TouchableOpacity onPress={()=> navigation.navigate('Government')}>
                <Card style={Style.card}>
                    <Card.Cover source={require('../images/government_haryana.png')} style={Style.cover}/>
                     <Card.Content style={Style.content} >
                        <Title  style={{fontSize: 16}}>Govt-offices</Title>
                    </Card.Content>
                </Card>
        </TouchableOpacity>
        <TouchableOpacity style={{textAlign:'center'}} onPress={()=> navigation.navigate('Market')}>
                <Card style={Style.card}>
                    <Card.Cover source={require('../images/market.png')} style={Style.cover}/>
                     <Card.Content style={Style.content} >
                        <Title style={{fontSize: 16}}>Market</Title>
                    </Card.Content>
                </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Medical')}>
                <Card style={Style.card}>
                    <Card.Cover source={require('../images/medical_2.png')} style={Style.cover}/>
                     <Card.Content style={Style.content}>
                        <Title  style={{fontSize: 16}} >Medical</Title>
                    </Card.Content>
                </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Utilities')}>
                <Card style={Style.card}>
                    <Card.Cover source={require('../images/utility4.png')} style={Style.cover}/>
                     <Card.Content style={Style.content} >
                        <Title  style={{fontSize: 16}}>Utility</Title>
                    </Card.Content>
                </Card>
        </TouchableOpacity> */}
        </View>
            
            
            {/* <TouchableOpacity onPress={()=> navigation.navigate('Blood')}>
           <FlatList data={category} horizontal={false} numColumns={2} style={Style.list} renderItem={({item}) => ( 
              <Card containerStyle={Style.card}
              featuredTitle={item.title}
    image={{
      uri: item.path
    }}
    imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                
                   </Card>  
           )}/>
           </TouchableOpacity> */}
           <Addcard/>
        <Text style={Style.head1}>Sorted List</Text>
           <View style={Style.sorted}>
           <FlatList 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Style.sorted}
          data={Sortedlist}
          keyExtractor= { item => item.id}
          renderItem= {sortedcard} />  


           {/* <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/automob.png')} onPress={()=>navigation.navigate('Details',{title:'Automobile'})} />
            <Text style={{fontSize: 15}}>Automobile</Text>
            </View>

            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/globe.png')} onPress={()=>navigation.navigate('Details', {title:'City-search'})} />
            <Text style={{fontSize: 15}}>City-search</Text>
            </View>

         <View style={Style.listitem}>

            <Avatar size= {60}rounded source={require('../images/education.png')} onPress={()=>navigation.navigate('Details',{title:'Education'})} />
            <Text style={{fontSize: 14}}>Education</Text>
            </View>
            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/entertainment.png')} onPress={()=>navigation.navigate('Details',{tite: 'Entertainment'})} />
            <Text style={{fontSize: 14}}>Entertainment</Text>
            </View>

            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/food.png')} onPress={()=>navigation.navigate('Details', {title:'restaurents'})} />
            <Text style={{fontSize: 14}}>Restaurents</Text>
            </View>

            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/travel.png')} onPress={()=>navigation.navigate('Details', {title: 'Travel'})} />
            <Text style={{fontSize: 14}}>Travel</Text>
            </View>


            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/travel.png')} onPress={()=>navigation.navigate('Details',{title:'Tourism'})} />
            <Text style={{fontSize: 14}}>Tourism</Text>
            </View>
 
            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/logo.png')} onPress={()=>navigation.navigate('Details', {title:'About-us'})} />
            <Text style={{fontSize: 14}}>About</Text>
            </View>
            <View style={Style.listitem}>
            <Avatar size= {60} rounded source={require('../images/info.png')} onPress={()=>navigation.navigate('About')} />
            <Text style={{fontSize: 14}}>App info</Text>
            </View> */}
            
            {/* <Card style={Style.child}>
                <Card.Content>
                <Avatar rounded source={require('../images/entertainment.png')} onPress={()=>navigation.navigate('About')} />
            <Text>Entertainment</Text>
                </Card.Content>
            </Card>
            <Card style={Style.child}>
                <Card.Content>
                <Avatar rounded source={require('../images/entertainment.png')} onPress={()=>navigation.navigate('About')} />
            <Text>Entertainment</Text>
                </Card.Content>
            </Card>
            <Card style={Style.child}>
                <Card.Content>
                <Avatar rounded source={require('../images/entertainment.png')} onPress={()=>navigation.navigate('About')} />
            <Text>Entertainment</Text>
                </Card.Content>
            </Card>
            <Card style={Style.child}>
                <Card.Content>
                <Avatar rounded source={require('../images/entertainment.png')} onPress={()=>navigation.navigate('About')} />
            <Text>Entertainment</Text>
                </Card.Content>
            </Card> */}
           </View>
           
           
        </View>
        </ScrollView>
        </View>
    ); }

    const Style = StyleSheet.create({
        sorted: {
            backgroundColor:'#fff',
            flexWrap: 'wrap',
            flexDirection:'row',
            flex:1,
            justifyContent:'space-around'
            

        },
        child: {
            width: '30%',
            margin: '1%',
            aspectRatio: 1,

        },
        listitem:{
            flexDirection:'column', 
            width: 105,
            alignItems:'center',
            marginTop:15,

        },
        
        head: {
            fontSize: 24,
            color: '#e30599',

        },
        head1: {
            fontSize: 24,
            color: '#e30599',
            marginTop:10

        },
        container : {
            flexDirection: 'column',
            backgroundColor: '#fff',
            marginBottom: 20,
},
        list: {
            flexDirection: 'column',
            marginBottom: 30,
        },
        
        title: {
            fontSize: 16,
            justifyContent: 'center',
            color: 'black',

        },
        quick:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-evenly',
    
        }, card: {
            backgroundColor: '#16f5ed',
            textAlign:'center',
            width: windowWidth/2.6,
            height:120,
            margin:10,
            borderRadius:30,

        },cover: {
            width: '100%',
            height: 90,
            borderTopEndRadius:30,
            borderTopStartRadius:30,

        },
        content:{
            justifyContent:'center',
            alignItems:'center',
        }
    
       
    })