import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
    headerLeft: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-map'/>
  };

  render() {
    return null;
  }
}
