import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Ionicons } from '@expo/vector-icons';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
    headerLeft: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-map'/>
  };

  render() {
    return null;
  }
}
