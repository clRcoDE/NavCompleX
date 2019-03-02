import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList , TouchableOpacity} from 'react-native'
import {NotifData} from './NotificationsData'
export default class Notifications extends Component {
  static navigationOptions=({navigation})=>{
    return{
      title:'Your Notifications'
    }
  }
    render() {
        return (
          <View style={styles.container}>
          <View style={styles.flatlistWrapper}>
        <FlatList
        data={NotifData}
        keyExtractor={(_,index)=>`${index} ` }
        renderItem={({item})=>(
          <View style={styles.itemWrapper} >

            <Text style={styles.titleText} >{item.title}</Text>
            <Text style={styles.dateText} >{item.date}</Text>
          </View>
        )}
        />
        </View>
        <View style={styles.goBackWrapper}>
        <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} style={styles.touchableBox}>
        <Text>back to profile</Text>
        </TouchableOpacity>
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
  flatlistWrapper:{
flex:4
  },
  goBackWrapper:{
justifyContent: 'center',
alignItems: 'center',
flex:2,
  },
  itemWrapper:{
    height:70,
    borderWidth: 3,
    borderColor:'#bbb',
    borderRadius: 7,
    margin:14,
    padding:12
  },
  titleText:{
    fontSize:18,
    color:'#224'
  },
  touchableBox:{
    paddingHorizontal: 40,

    paddingVertical: 15,
    backgroundColor:'#ccc',
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
