import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const RootStack = createBottomTabNavigator({
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

const App = createAppContainer(RootStack);

export default App;