import React from 'react';
import {
  Image,
  Platform,
  TextInput ,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Hotspot from './Hotspot';
import { ScrollView } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Help',
    headerLeft: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-people'/>
  };

  state = {
    screen: 'helpthem',
    status: 'Enter your location: ',
    text: '',
  }

  buttonText = "Request Help"

  changeScreen() {
    if(this.state.screen == 'helpthem'){
      this.setState({screen: 'gethelp'})
    }
    else{
      this.setState({screen: 'helpthem'})
    }
  }

  startHotspot() {
      this.setState({status: 'Broadcasting Signal, standby. Press Back to stop broadcasting.'})
      this.buttonText = "Stop Broadcasting"
  }

  changeScreenBack() {
      this.setState({screen: 'helpthem', status: 'Enter your location: ', text: ''})
  }

  render() {
    if(this.state.screen == 'helpthem'){
        return (
          <View style={styles.container}>
            <Text style={styles.text}>In case of network failure, Press the Send Help button and enter your location: </Text>
            <Button onPress={() => {
              this.changeScreen();
            }}
                    style={styles.button}
                    title="Request Help"
                    color="red"
                    accessibilityLabel="Starts a hotspot"></Button>
            
            <Text style={styles.text}>
              Help others by connecting to these signals and finding them based on the signal strength:
            </Text>

            <ScrollView>

            </ScrollView>

          </View>
        );
      }
    else if(this.state.screen == 'gethelp'){
        return (
          <View style={styles.container}>
            <Text style={styles.text}>{this.state.status}</Text>

            <View style={{backgroundColor: 'grey'}}>
            <TextInput 
                        underLineColorAndroid='red' 
                        style={styles.textbox} 
                        value={this.state.text} 
                        onChangeText={(textx) => this.setState({ text: textx })} 
                        placeholderText='locationx'/>
            </View>

            <View style={{height: Constants.statusBarHeight}}></View>

            <Button onPress={() => {
              this.startHotspot();
            }}
                    style={styles.button}
                    title={this.buttonText}
                    color="red"
                    accessibilityLabel="Starts a hotspot"></Button>

            <View style={{height: '25%'}}></View>

            <Button onPress={() => {
              this.changeScreenBack();
            }}
                    style={styles.button}
                    title='Back'
                    color="red"
                    ></Button>

          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    padding: 10
  },
  button: {
    padding: 10,

  },
  textbox:{
    padding: 10,
    borderColor: 'gray',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  }
});
