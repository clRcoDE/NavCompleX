import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {logo} from '../assets/images/Index'
export default class Signup extends Component {

  
onPressNavigator=(des)=>{
  const {navigation} = this.props
  navigation.navigate(des)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image
              source={logo}
              style={styles.logo}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={"username"}
              onChangeText={this.getUserInput}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"password"}
              onChangeText={this.getPassInput}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"re-enter password"}
              onChangeText={this.getPassInput}
            />


            <View style={styles.termsView}>
              <Text>
                by signing up you are accepting
              </Text>
              <TouchableOpacity
                style={styles.termsTouchable}
                onPress={() => this.onPressNavigator('Modal')}
              >
                <Text style={styles.termsText}> all Terms and Services </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableHighlight
              style={styles.signinButton}
              onPress={() => this.onPressNavigator('DrawerNavigator')}
              underlayColor={"transparent"}
            >
              <Text>SIGN UP</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.gotoSignup}>
            <TouchableOpacity
              style={styles.createNewAccButton}
              onPress={() => this.onPressNavigator('Login')}
              underlayColor={"transparent"}
            >
              <Text>Already Signed up ? </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor:'yellow',
  },
  wrapper: {
    flex: 1
    // backgroundColor:'red',
  },
  logoWrapper: {
    flex: 4,
    // backgroundColor:'purple',
    justifyContent: "center",
    alignItems: "center"
  },
  inputWrapper: {
    // backgroundColor:'green',
    flex: 6,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 2,
    // backgroundColor:'red',
    justifyContent: "center",
    alignItems: "center"
  },
  gotoSignup: {
    flex: 2,
    // backgroundColor:'blue',
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 125,
    height: 125
  },
  signinButton: {
    width: 200,
    height: 55,
    backgroundColor: "yellow",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  createNewAccButton: {},
  termsView:{
    // flexDirection:'row',
    flexWrap:'wrap'
  },
  termsTouchable:{
    // backgroundColor:'red',
    alignItems:'center'
  },
  termsText:{
    color:'royalblue'
  }
});
