import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Shelters',
  tabBarIcon: <MaterialCommunityIcons style={{padding: 10}} size={32} color="red" name='home-alert'/>
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-people'/>
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-map'/>
};

export default createBottomTabNavigator({
  LinksStack,
  HomeStack,
  SettingsStack,
}, 

{tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    color: 'black',
  },
}}

);
