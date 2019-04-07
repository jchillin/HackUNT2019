import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';


function onPressLearnMore() {
  return null;
}

export default class Hotspot extends React.Component {
  static navigationOptions = {
    title: 'Help',
    headerLeft: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-people'/>
  };

  render() {
    status = 'Enter your location: '
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{status}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    padding: 10
  },
});
