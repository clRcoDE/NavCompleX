/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image ,TouchableOpacity } from 'react-native';
import { createAppContainer , createSwitchNavigator , createStackNavigator , createDrawerNavigator , createBottomTabNavigator } from 'react-navigation'
import About from './src/pages/About'
import ItemList from './src/pages/ItemList'
import Loading from './src/pages/Loading'
import Login from './src/pages/Login'
import Profile from './src/pages/Profile'
import Recommended from './src/pages/Recommended'
import Settings from './src/pages/Settings'
import Signup from './src/pages/Signup'
import TopPosts from './src/pages/TopPosts'
import Trends from './src/pages/Trends'
import UserProfile from './src/pages/UserProfile'
import Pay from './src/pages/Pay'
import Plans from './src/pages/Plans'
import Wallets from './src/pages/Wallets'
import Notifications from './src/pages/Notifications'
import TermsAndpolicy from './src/pages/TermsAndPolicy'






export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}




// const SuggestionsListNavigator = createSwitchNavigator(
//   {
    
//   },
// )


const BalanceNavigator = createStackNavigator(
  {
    Profile:Profile,
    Notifications:Notifications,
    Pay:Pay,
    Plans:Plans,
    Wallets:Wallets,
    

  },
)

const ContactsNavigator = createStackNavigator(
  {
    ItemList:{
      screen:ItemList,
      navigationOptions:({navigation})=>{
        return{
          title:'users',
          headerLeft:(<TouchableOpacity 
            style={{marginHorizontal:15}}
             onPress={()=>navigation.openDrawer()} >
             <Image source={require('./src/assets/images/menu.png')} 
              style={{width:20,height:20}}/>
              </TouchableOpacity>)
        }
      }},
    UserProfile:UserProfile
  },{
    initialRouteName:'ItemList'
  }
)

const  RecommendedStack = createStackNavigator(
  {
    RecommendedScreen:Recommended

  },{
    defaultNavigationOptions:({navigation})=>({
      title:'recommended ',
      headerLeft:(
      <TouchableOpacity 
      style={{marginHorizontal:15}} 
      onPress={()=>navigation.openDrawer()} >
      <Image source={require('./src/assets/images/menu.png')} 
       style={{width:20,height:20}}/>
       </TouchableOpacity>)
    })
  }
)

const  TrendsStack = createStackNavigator(
  {
    TrendsScreen:Trends

  },{
    defaultNavigationOptions:({navigation})=>({
      title:'Trends',
      headerLeft:(
      <TouchableOpacity  
      style={{marginHorizontal:15}} 
      onPress={()=>navigation.openDrawer()} >
      <Image source={require('./src/assets/images/menu.png')} 
       style={{width:20,height:20}}/>
       </TouchableOpacity>)
    })
  }
)

const  TopPostsStack = createStackNavigator(
  {
    TopPostsScreen:TopPosts

  },{
    defaultNavigationOptions:({navigation})=>({
      title:'Top Posts',
      headerLeft:(
      <TouchableOpacity style={{marginHorizontal:15}} onPress={()=>navigation.openDrawer()} >
      <Image source={require('./src/assets/images/menu.png')}  
      style={{width:20,height:20}}/>
      </TouchableOpacity>
      )
    })
  }
)

const SightBottomNavigator = createBottomTabNavigator(
  {
    Recommended:RecommendedStack,
    TopPosts:TopPostsStack,
    Trends:TrendsStack
  },{
    initialRouteName:'TopPosts',
    defaultNavigationOptions:({navigation})=>({
      tabBarOptions: {
        activeTintColor: 'royalblue',
        inactiveTintColor:'#555',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#eee',
          height:70,
        },
        
      },
      tabBarIcon:(
      <Image 
      source={require('./src/assets/images/circle.png')}
       style={{width:20,height:20}}/>
       )
    })
  }
)


const AppDrawerNavigator = createDrawerNavigator(
  {
    Settings:Settings,
    About:About,
    Contacts:ContactsNavigator,
    Balance:BalanceNavigator,
    Sight:SightBottomNavigator
  },{
    initialRouteName:'Sight',
    
  }
)

const AuthsPagesNavigator = createStackNavigator(
  {
    Signup:Signup,
    Login:Login,
    Modal:TermsAndpolicy
  },{
    initialRouteName:'Login',
    mode:'modal',
    headerMode:'none'
  }
)




const AppStarter = createSwitchNavigator(
  {
    AuthsPages:AuthsPagesNavigator,
    DrawerNavigator:AppDrawerNavigator
  },{
    initialRouteName:'AuthsPages',
   
  }
)

const AppStartNavigator = createSwitchNavigator(
  {
    Loading:Loading,
    Auth:AppStarter
  },{
    initialRouteName:'Loading'
  }
)


const AppContainer = createAppContainer(AppStartNavigator)