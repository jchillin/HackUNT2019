import React from 'react';
import {
  ToastAndroid,
  ScrollView,
  TextInput ,
  StyleSheet,
  Text,
  Button,
  View,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import wifi from 'react-native-android-wifi';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Help',
    headerLeft: <Ionicons style={{padding: 10}} size={32} color="red" name='ios-people'/>
  };

  state = {
    screen: 'helpthem',
    status: 'Enter your location: ',
    text: '',
    modalVisible: false,
    wifiList: null,
  }

  wifiInfo = {
    SSID: '',
    password: '',
  }

  buttonText = "Request Help"

  componentDidMount (){
    console.log(wifi);
    this.askForUserPermissions();
  }

  async askForUserPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
      } else {
        console.log("You will not able to retrieve wifi available networks list");
      }
    } catch (err) {
      console.warn(err)
    }
}
  
  getWifiNetworksOnPress(){
    wifi.loadWifiList((wifiStringList) => {
        console.log(wifiStringList);
        var wifiArray = JSON.parse(wifiStringList);
        this.setState({
          wifiList:wifiArray,
          modalVisible: true
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  renderModal(){
    var wifiListComponents = [];
    for (w in this.state.wifiList){
      wifiListComponents.push(
        <View key={w} style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>{this.state.wifiList[w].SSID}</Text>
          <Text>Level: {this.state.wifiList[w].level}</Text>
          <Text> </Text>
        </View>
      );
    }
    return wifiListComponents;
  }

  changeScreen() {
    if(this.state.screen == 'helpthem'){
      this.setState({screen: 'gethelp'})
    }
    else{
      this.setState({screen: 'helpthem'})
    }
  }

  startHotspot() {
    if(this.state.status != 'Broadcasting Signal, standby. Press Back to stop broadcasting.'){
      this.setState({status: 'Broadcasting Signal, standby. Press Back to stop broadcasting.'})
      this.buttonText = "Stop Broadcasting"
    }
    else{
      this.setState({status: 'Enter your location: '})
      this.buttonText = "Request Help"
      console.log('disabling')
    }
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
              Help others by connecting to these signals and finding them based on the signal strength. Help broadcasts are preceded by a 'HELP':
            </Text>

            <Button onPress={() => {
              this.getWifiNetworksOnPress();
            }}
                    style={styles.button}
                    title="Refresh Nearby Networks"
                    color="red"
                    accessibilityLabel="Refresh"></Button>

            <ScrollView style={{padding: 20}}>
              {this.renderModal()}
            </ScrollView>

          </View>
        );
      }
    else if(this.state.screen == 'gethelp'){
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Go to android settings, under Network click 'More', then 'Tethering and Portable Hotspot, and turn Portable Wifi Hotspot on. Make sure the network name is a HELP message with your location, and the security is None.</Text>
            <Text style={styles.text}>{this.state.status}</Text>

            <View style={{backgroundColor: 'grey'}}>
            <TextInput 
                        underLineColorAndroid='red' 
                        style={styles.textbox} 
                        value={this.state.text} 
                        onChangeText={(textx) => this.setState({ text: textx })} 
                        placeholderText='locationx'/>
            </View>

            <View style={{height: '5%'}}></View>

            <Button onPress={() => {
              this.wifiInfo.SSID = 'HELP at Location: ' + this.state.text;
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
