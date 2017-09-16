import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


// this could be in a seperate file too
class TextField extends Component {
  render() {
    return (
        <View>
          <Text> {this.props.label}
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
    );
  }
}

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: 'NULL'
    }
  }


  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.text_input_container }>
          <TextField label="First Name:"/>
          {/* <Text>First Name:
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here"
            onChangeText={(text) => this.setState({text})}
          /> */}
        </View>
        <View style={styles.text_input_container}>
          <TextField label="Last Name:"/>
        </View>
        <View style={styles.text_input_container}>
          <TextField label="Birthday:"/>
        </View>
        <View style={styles.text_input_container}>
          <TextField label="Blood Type:"/>
        </View>
        <View style={styles.text_input_container}>
          <TextField label="Gender:"/>
        </View>
        <View style={styles.text_input_container}>
          <TextField label="Country:"/>
        </View>
        <View style={styles.text_input_container}>
          <TextField label="City:"/>
        </View>
      </View>
    );
  }
};


// STYLESHEETS

const styles = StyleSheet.create({

  text_input_container: {
    flex: 1,
    // flexDirection: 'row',
    width: 400,
    height: 60,
    backgroundColor: 'powderblue'
  }
});


module.exports = Registration;
