import React, { Component } from 'react'
import { Text, StyleSheet, View,Image ,ActivityIndicator,Dimensions} from 'react-native'


const dim = Dimensions.get('window')
export default class Loading extends Component {


  componentDidMount(){
    setTimeout(()=>this.props.navigation.navigate('Auth'),10)
  }

  
  render() {
    return (
      <View style={styles.container}>
     
      <View style={styles.Wrapper}>
      <View style={styles.logoWrapper}>
      <View style={styles.logoImage}>
      
      <Image source={require('../assets/images/logo.png')} style={styles.logo}/></View>
      
      <Text style={styles.logoText} >PaXineR</Text>
      </View>
      <View style={styles.activityWrapper}>
<ActivityIndicator animating={true} />
      </View>
        
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  Wrapper:{
    
  },
  logoWrapper:{
justifyContent: 'space-evenly',
alignItems: 'center',
height:(dim.height)-(dim.height/2),
// borderWidth: 3,
  },
  logo:{
    width:100,
    height:100,
    margin:30
  },
  logoText:{
fontSize:24,
color:'#444',
fontWeight: '600',

  },
  activityWrapper:{
    height:(dim.height/4)-50,
    justifyContent:'center',
    alignItems:'center',
  },

})
