import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default Trends =()=> {


  
    return (
      <View style={styles.container}>
      <View style={styles.Wrapper}>
      <Text>Trends : Under Developing</Text>
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

justifyContent: 'center',
alignItems: 'center',
  }
})

