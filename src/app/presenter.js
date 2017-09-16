import React, { Component } from 'react';
import { View, Button } from 'react-native';


export default class AppPresenter extends Component { 
  render() { 
    return (
      <View> 
      <Button 
      onPress={() => alert("hello")}
      title="This button says hello" 
      colour="#841584"
      />
      <Button 
      onPress={ () => alert("yo")}
      title="This button says yo" 
      colour="#841584"
      />
      <Button 
      onPress={ () => alert("hello")}
      title="This button says hello" 
      colour="#841584"
      />
      </View> 
    ); 
  }
}
