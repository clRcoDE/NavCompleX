import React, { Component } from 'react'
import { Text, StyleSheet, View  ,Image , TextInput , TouchableHighlight , TouchableOpacity} from 'react-native'

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
        <Image source={require('../assets/images/logo.png')}  style={styles.logo} /></View>
        <View style={styles.inputWrapper}>
        <TextInput style={styles.textInput} placeholder={'username'} onChangeText={this.getUserInput} />
        <TextInput style={styles.textInput} placeholder={'password'} onChangeText={this.getPassInput} />
        <TextInput style={styles.textInput} placeholder={'re-enter password'} onChangeText={this.getPassInput} />
        <View style={styles.termsView}>
        <Text style={styles.termsText} >
        by signing up you are accepting all
        </Text>
        <TouchableOpacity 
        style={styles.termsTouchable} 
        onPress={()=>this.props.navigation.navigate('Modal')}>
        <Text  style={styles.termsText}> Terms and Services </Text>
        </TouchableOpacity> 
        </View>
        </View>
        <View style={styles.buttonWrapper}>
<TouchableHighlight  style={styles.signinButton} onPress={()=>this.props.navigation.navigate('DrawerNavigator')}  underlayColor={'transparent'} >
<Text>SIGN UP</Text>
</TouchableHighlight>
</View>
        <View style={styles.gotoSignup}>
        <TouchableOpacity  style={styles.createNewAccButton} onPress={()=>this.props.navigation.navigate('Signup')}  underlayColor={'transparent'} >
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
    backgroundColor:'yellow',
  },
  wrapper:{
    flex:1,
    backgroundColor:'red',
  },
  logoWrapper:{
    flex:2,
    backgroundColor:'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper:{
    backgroundColor:'green',
    flex:3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonWrapper:{
    flex:2,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gotoSignup:{
    flex:1,
    backgroundColor:'blue',
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
