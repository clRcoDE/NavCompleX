import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View Style={styles.container}>
        <View style={styles.Wrapper}>
          <View style={styles.logoWrapper}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.InputWrapper}>
            <TextInput style={styles.textInputs} placeholder={'hello'} />
            <TextInput style={styles.textInputs} placeholder={'hello'} />
            <TextInput style={styles.textInputs} placeholder={'hello'} />
          </View>
          <View style={styles.gotoSignup}></View>
        </View>

      </View>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    borderWidth: 6,
    borderColor: 'green'

  },
  Wrapper: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 3,
  },
  logoWrapper: {
    flex: 2,
    backgroundColor: 'green'
  },
  InputWrapper: {
    flex: 8,
    backgroundColor: 'blue'
  },
  gotoSignup: {
    flex: 1,
    backgroundColor: 'gold'
  },
  logo: {
    width: 100,
    height: 100
  }
})
