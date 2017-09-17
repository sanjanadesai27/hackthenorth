import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import UserInfo from './userInfo.js';

export default class QrReader extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    // Linking.openURL(data).catch(err => console.error('An error occured', err));
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    Actions.userInfo({ data });
  }
}
