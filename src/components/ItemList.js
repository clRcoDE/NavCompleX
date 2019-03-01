import React, { Component } from 'react'
import { Text, StyleSheet, View , FlatList , TouchableOpacity} from 'react-native'


export default class ItemList extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    fetch(`https://randomuser.me/api?results=16`)
    .then(res=> res.json())
    .then(data => this.setState({data:data.results},))
    .catch(e=> console.warn('connection error'))
  }
  render() {
    return (
      
        <View style={styles.flatlistWrapper}>
        <FlatList
        data={this.state.data}
        keyExtractor={(_,index)=>`index `}
        renderItem={({item})=>(
          <View style={styles.itemWrapper}>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('UserProfile', {
            userinfo:{
              name:item.name.last,
              photo:item.picture.medium,
              email:item.email
            }
           
            })} style={styles.subInfo}>
          <Text style={styles.itemName} >{item.name.last}</Text>
          <Text>{item.location.timezone.description}</Text>
          </TouchableOpacity>
          </View>
        )}
        />
        </View>

    )
  }
}







const styles = StyleSheet.create({
  
  flatlistWrapper:{
// backgroundColor:'#888',
// borderWidth:6,
flex:1
  },
  itemWrapper:{
    height:70,
    backgroundColor:'#eee',
    borderColor:'#aaa',
    borderWidth: 3,
    margin: 8,
    borderRadius: 9,
    justifyContent: 'center',
    paddingHorizontal:25,
    alignItems: 'flex-start',
  },
  subInfo:{

  },
  itemName:{
    fontWeight:'600',
    textAlign:'left'
  }
})
