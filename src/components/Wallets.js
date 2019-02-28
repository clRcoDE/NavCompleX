import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Wallets extends Component {
    render() {
        return (
          <View Style={styles.container}>
            <View style={styles.Wrapper}>
            
            </View>
    
          </View>
        )
      }
    }
    
 
    
    
    
    const styles = StyleSheet.create({
      container : {
        flex:1,
        backgroundColor:'grey',
        
        justifyContent: 'center',
        alignItems: 'center',
      },
      Wrapper:{
    flex:1
      }
    })
    
  