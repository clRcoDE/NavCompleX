import React, { Component } from 'react'
import { Text, StyleSheet, View  ,Image , TextInput , TouchableHighlight , TouchableOpacity} from 'react-native'
import {logo} from '../assets/images/Index'
export default class Login extends Component {

onPressNavigator=(des)=>{

  const {navigation} = this.props
navigation.navigate(des)
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
        <Image source={logo}  style={styles.logo} /></View>
        <View style={styles.inputWrapper}>
        <TextInput style={styles.textInput} placeholder={'username'} onChangeText={this.getUserInput} />
        <TextInput style={styles.textInput} placeholder={'password'} onChangeText={this.getPassInput} />
        </View>
        <View style={styles.buttonWrapper}>
<TouchableHighlight  style={styles.signinButton} onPress={()=>this.onPressNavigator('DrawerNavigator')}  underlayColor={'transparent'} >
<Text>SIGN IN</Text>
</TouchableHighlight>
</View>
        <View style={styles.gotoSignup}>
        <TouchableOpacity  style={styles.createNewAccButton} onPress={()=>this.onPressNavigator('Signup')}  underlayColor={'transparent'} >
<Text>or create New Account ? </Text>
</TouchableOpacity></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff'
    // backgroundColor:'yellow',
  },
  wrapper:{
    flex:1,
    // backgroundColor:'red',
  },
  logoWrapper:{
    flex:4,
    // backgroundColor:'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper:{
    // backgroundColor:'green',
    flex:6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonWrapper:{
    flex:2,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gotoSignup:{
    flex:2,
    // backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width:125,
    height:125
  },
  signinButton:{
    width:200,
    height:55,
    backgroundColor:'yellow',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNewAccButton:{

  }
})
