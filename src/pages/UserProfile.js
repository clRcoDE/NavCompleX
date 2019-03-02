import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

export default class UserProfile extends Component {
static navigationOptions=({navigation})=>{
  const headerName = navigation.getParam('userinfo','empty')
  return{
    title:` hi i'm ${headerName.name}`
  }
}



  render() {
    const {navigation} = this.props
    const userinfo = navigation.getParam('userinfo','empty')
    const {name , email , photo} = userinfo
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image source={{uri: photo}} style={styles.avatar}/>
        </View>
        <View style={styles.body}>
        <Text style={styles.nameText} >{name}</Text>
        <Text style={styles.emailText} >{email}</Text>
        </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container : {
    flex:1,
    // backgroundColor:'grey',
    
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header:{
    flex:2,
    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  body:{
    flex:2,
    // backgroundColor:'blue',
    justifyContent: 'center',
    alignItems:'center'
  },
  avatar:{
    width:175,
    height:175,
    borderRadius: 100,
  },
  nameText:{
    color:'#444',
    fontWeight:'600',
    fontSize: 25,
  },
  emailText:{
    color:'#777',
    fontSize:18
  }

})

