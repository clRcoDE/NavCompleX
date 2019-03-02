/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { createAppContainer , createSwitchNavigator , createStackNavigator , createDrawerNavigator , createBottomTabNavigator } from 'react-navigation'
import About from './src/components/About'
import ItemList from './src/components/ItemList'
import Loading from './src/components/Loading'
import Login from './src/components/Login'
import Profile from './src/components/Profile'
import Recommended from './src/components/Recommended'
import Settings from './src/components/Settings'
import Signup from './src/components/Signup'
import TopPosts from './src/components/TopPosts'
import Trends from './src/components/Trends'
import UserProfile from './src/components/UserProfile'
import Pay from './src/components/Pay'
import Plans from './src/components/Plans'
import Wallets from './src/components/Wallets'
import Notifications from './src/components/Notifications'
import TermsAndpolicy from './src/components/TermsAndPolicy'






export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}




const SuggestionsListNavigator = createSwitchNavigator(
  {
    Pay:Pay,
    Plans:Plans,
    Wallets:Wallets,
    

  },
)


const BalanceNavigator = createStackNavigator(
  {
    Profile:Profile,
    Notifications:Notifications,
    SuggestionsListNavigator:SuggestionsListNavigator
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

const SignupStack = createStackNavigator(
  {
    Main:Signup,
    Modal:TermsAndpolicy
  },{
    mode:'modal',
    headerMode:'none'
  }
)

const AppAuthNavigator = createSwitchNavigator(
  {
    Login:Login,
    Signup:SignupStack,

    DrawerNavigator:AppDrawerNavigator
  },{
    initialRouteName:'Login'
  }
)

const AppStartNavigator = createSwitchNavigator(
  {
    Loading:Loading,
    Auth:AppAuthNavigator
  },{
    initialRouteName:'Loading'
  }
)


const AppContainer = createAppContainer(AppStartNavigator)