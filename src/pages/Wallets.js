import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Wallets extends Component {


  static navigationOptions=({navigation})=>{
    const data = navigation.getParam('subData','empty')
  const {title} = data
    return{
      title:`your ${title}`,
      
    }
  }

  
onPressNavigator=()=>{
  const {navigation} = this.props
  navigation.goBack()
  }
    render() {
        return (
          <View style={styles.container}>
        <View style={styles.Wrapper}>
        <Text>Wallet : Under Developing</Text>
        <Text onPress={this.onPressNavigator.bind(this)} >go Back</Text>
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

  