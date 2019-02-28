/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
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







export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}




const SuggestionsListNavigator = createStackNavigator(
  {
    Pay:Pay,
    Plans:Plans,
    Wallets:Wallets

  }
)


const BalanceNavigator = createSwitchNavigator(
  {
    Profile:Profile,
    Notifications:Notifications,
    SuggestionsListNavigator:SuggestionsListNavigator
  }
)

const ContactsNavigator = createStackNavigator(
  {
    ItemList:ItemList,
    UserProfile:UserProfile
  },{
    initialRouteName:'ItemList'
  }
)



const SightBottomNavigator = createBottomTabNavigator(
  {
    Recommended:Recommended,
    TopPosts:TopPosts,
    Trends:Trends
  },{
    initialRouteName:'TopPosts'
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
    initialRouteName:'Sight'
  }
)



const AppAuthNavigator = createSwitchNavigator(
  {
    Login:Login,
    Signup:Signup,
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