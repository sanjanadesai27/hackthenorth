import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends Component { 
  render() { 
    return (
      <View> 
      <Button 
      onPress={ () => Actions.login() }
      title="Login" 
      colour="#841584"
      />
      <Button 
      onPress={ () => Actions.register() }
      title="Register" 
      colour="#841584"
      />
      <Button 
      onPress={ () => Actions.qrReader() }
      title="QR Reader" 
      colour="#841584"
      />
      </View> 
    ); 
  }
}
