import React, { Component } from 'react'
import { Text, StyleSheet, View , Image } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Wrapper}>
        <View style={styles.logoWrapper}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.aboutWrapper}>
        <Text style={styles.aboutText} >created with 
        <Image style={styles.heart} 
        source={require('../assets/images/heart.png')} />
         by Paxiner.Inc in PayamGostar by Danni.el
         </Text>
        
        </View>
        
       
        <Text onPress={()=>this.props.navigation.goBack()} >go Back</Text>
        </View>

      </View>
    )
  }
}





const styles = StyleSheet.create({
  container : {
    flex:1,
    // backgroundColor:'grey',
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  Wrapper:{
flex:1,

backgroundColor:'yellow'
  },
  aboutText:{
    fontWeight:'600',
    fontSize:20,
    color:'#444'
  },
  heart:{
    width:15,
    height:15
  },
  logoWrapper:{
    flex:1,
    backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width:125,
    height:125
  },
  aboutWrapper:{
    flex:1,
    // backgroundColor:'red',   
    
    // justifyContent: 'center',
    alignItems: 'center',
  }
})
