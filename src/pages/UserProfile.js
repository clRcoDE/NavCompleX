import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

let Jdata=null
let sample={ id: 19, product: "Heney",
desc: "just Heney nothing else", price: 99.99 }



// let sample={ id: 8, product: "Heney",
// desc: "just Heney nothing else", price: 99.99 }



export default class UserProfile extends Component {
static navigationOptions=({navigation})=>{
  const headerName = navigation.getParam('userinfo','empty')
  return{
    title:` hi i'm ${headerName.name}`
  }
}



fetchjsonserver=()=>{
  fetch('http://10.0.2.2:3000/wines/',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(sample)
  })
  // .then(res=>res.json())
  // .then(data=>data)
  .catch( e => console.warn('Jserver Error') )


}
componentDidMount(){

this.fetchjsonserver()

setTimeout(()=>console.warn(Jdata),2000)
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

