import React, { Component } from 'react'
import { Text, StyleSheet, View , FlatList , TouchableOpacity , Image} from 'react-native'

let Jdata
let suggestionsTabData=[
  {
    title:'pay',
    desc:'pay your bills',
    color:'royalblue',
    navigate:'Pay'
  },
  {
    title:'plans',
    desc:'see other plans',
    color:'gold',
    navigate:'Plans'
  },
  {
    title:'wallets',
    desc:'manage your wallets',
    color:'#42f4b0',
    navigate:'Wallets'
  }
]


export default class Profile extends Component {


  static navigationOptions=({navigation})=>{
 return{
   headerRight:(
   <TouchableOpacity 
   onPress={()=>navigation.navigate("Notifications")} >
   <Image style={styles.notifIcon} 
   source={require('../assets/images/notifications.png')}/>
   </TouchableOpacity>),
   title:'Your Balance',
   headerLeft:(
     <TouchableOpacity  onPress={()=>navigation.openDrawer()} ><Image source={require('../assets/images/menu.png')} style={styles.menuDrawer} /></TouchableOpacity>
   )
   
 }
  }


  
onPressNavigator=(item)=>{
  const {navigate} = item
  const {navigation} = this.props
  navigation.navigate(`${navigate}`,{subData:item})
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.Wrapper}>
      
      <View style={styles.body}>
      <Image source={require('../assets/images/profile.png')} style={styles.profile}/>

      
      </View>
      <View style={styles.suggestions}>
      <FlatList
       data={suggestionsTabData}
       horizontal={true} 
       keyExtractor={(_,index)=>`${index} `}
      renderItem={({item})=>(
        <TouchableOpacity   onPress={()=>this.onPressNavigator(item) }  style={[styles.suggestionItem,{backgroundColor:item.color}]}>
        <View style={styles.titleTextWrapper} ><Text style={styles.titleText} >{item.title}</Text></View>
        <View style={styles.descTextWrapper} ><Text style={styles.descText} >{item.desc}</Text></View>
        </TouchableOpacity>
      )}  />
      </View>
      </View>

    </View>
    )
  }
}







const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'lightblue',
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  Wrapper:{
flex:1,

justifyContent: 'center',
alignItems: 'center',
  },
  notifIcon:{
    width:24,
    height:24,
    marginHorizontal:8
  },
  menuDrawer:{
    width:24,
    height:24,
    marginHorizontal: 8,
  },
  profile:{
    width:225,
    height:225,
    borderRadius:150
  },
  body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'r'
  },
  suggestions:{
    flex:1,
    // backgroundColor:'yellowgreen',
    // borderWidth: 4,
    paddingVertical:25
  },
  suggestionItem:{
    width:250,
    borderRadius:8,
    margin:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextWrapper:{
    // backgroundColor:'gold',
   
  },
  descTextWrapper:{
    // backgroundColor:'green',
   
  },
  
  titleText:{
    fontSize:30,
    color:'#fff',
    fontWeight: '800',
  },
})
