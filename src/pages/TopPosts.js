import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default  TopPosts =()=> {
// static navigationOptions=({navigation})=>{
//   return{
//     header:{
//       style:{
//         position: 'absolute',
//         backgroundColor:'transparent',
//         zIndex: 100,
//         top:0,
//         left:0,
//         right:0
//       }
//     }
//   }
// }




    return (
      <View style={styles.container}>
        <View style={styles.Wrapper}>
        <Text>TopPost : Under Developing</Text>
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
