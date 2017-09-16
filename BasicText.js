import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class BasicText extends Component {
  render() {
    return (
      <Text> ">"{this.props.text}</Text>
    );
  }
}

module.exports = BasicText;
