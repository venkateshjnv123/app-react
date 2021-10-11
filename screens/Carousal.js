import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

const images1=[
    require('../images/charkhidadri1.png'),
    require('../images/carousal_7.png'),
    require('../images/carousal_1.png'),
    require('../images/carousal_2.png'),
    require('../images/carousal_4.png'),
    require('../images/carousal_5.png'),
    require('../images/carousal_6.png'),
    
  
]

const images2=['carousal_1', 'carousal_2', 'carousal_3']

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
      this.setState({
        active:slide
      })
      }
    }
  
  }

  render() {
    const { active } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>HomeScreen</Text>
        </View> */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent })=>this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
               images1.map((e, index) =>
                 <Image
                   key={index}
                   resizeMode="stretch"
                   style={styles.wrap}
                   source={e}
                 />
               )
           
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images1.map((e, index) =>
                <Text
                  key={index}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25 // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  }

});

export default Carousal;