import React, { Component } from 'react'
import { Text, StyleSheet, View , Image , TouchableOpacity } from 'react-native'
import {logo} from '../assets/images/Index'
export default  About =({navigation})=> {

  
onPressNavigator=()=>{
 navigation.goBack()
  }
    return (
      <View style={styles.container}>
        <View style={styles.Wrapper}>
        <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.aboutWrapper}>
        <View style={styles.textWrapper}>
        <Text style={styles.aboutText} >created with 
        <Image style={styles.heart} 
        source={require('../assets/images/heart.png')} />
         by Paxiner.Inc in PayamGostar by Danni.el
         </Text>
        
        </View>
        </View>
        <View style={styles.goBackWrapper}>
        <TouchableOpacity  style={styles.touchableBox} onPress={this.onPressNavigator.bind(this)}>
        <Text>go Back</Text>
        
        </TouchableOpacity>
        
        </View>
       
        
        </View>

      </View>
    )
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

// backgroundColor:'yellow'
  },
  aboutText:{
    fontWeight:'600',
    fontSize:20,
    color:'#444',
  },
  heart:{
    width:15,
    height:15
  },
  logoWrapper:{
    flex:1,
    // backgroundColor:'blue',
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
    
justifyContent: 'center',  
alignItems:'center',

    
  },
  textWrapper:{
// backgroundColor:'yellow',

justifyContent: 'center',  
alignItems:'center',
padding: 12,
  },
  goBackWrapper:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableBox:{
    paddingHorizontal:65,
    paddingVertical: 25,
    borderRadius:50,
    backgroundColor:'#ccc'
  }
})
