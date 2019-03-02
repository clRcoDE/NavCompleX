import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Plans extends Component {

  static navigationOptions=({navigation})=>{
    const data = navigation.getParam('subData','empty')
  
    return{
      title:`your ${data.title}s`,
      
    }
  }

  onPressNavigator=()=>{
    this.props.navigation.goBack()
    }
    render() {
        return (
          <View style={styles.container}>
        <View style={styles.Wrapper}>
        <Text>Plans : Under Developing</Text>
        <Text onPress={()=>this.onPressNavigator()} >go Back</Text>
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

justifyContent: 'center',
alignItems: 'center',
  }
})

    