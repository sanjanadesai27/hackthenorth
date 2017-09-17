import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,
  Modal, TouchableHighlight, Button, Image
 } from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

APP_LOGO = "https://facebook.github.io/react/img/logo_og.png";

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      message: '',
      messageVisible: false,
    }
  }

  setMessageVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleFormChange(formData){
    this.setState({formData:formData});
    this.setMessageVisible(!this.state.modalVisible);   // hide message again
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  registerPatient(formData) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.formData)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // let responseJsonStr = JSON.stringify()
        this.setState({
          message: 'Successfully created' + JSON.stringify(responseJson),
          formData: {}
          // reset to empty
        });
        this.setMessageVisible(!this.state.modalVisible);
        // return responseJson.movies;
      })
      .catch((error) => {
        this.setState({
          message: 'Error: ' + error
        });
        this.setMessageVisible(!this.state.modalVisible);
        console.error(error);
      });
  }

  handleFormFocus(e, component){
    console.log(e, component);
  }

  openTermsAndConditionsURL(){

  }

  render() {
    return (
        <ScrollView keyboardShouldPersistTaps="always"
          style={styles.scrollingView}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: APP_LOGO}}
          />

        <Form
            ref='registrationForm'
            // onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Personal Information">
          <InputField ref='first_name' placeholder='First Name'/>
          <InputField ref='last_name' placeholder='Last Name'/>
          <PickerField placeholderStyle={styles.picker}
            ref='gender'
            label='Gender'
            options={{
              "": '',
              male: 'Male',
              female: 'Female',
              other: 'Other'
            }}/>
          <InputField ref='country' placeholder='Country'/>
          <InputField ref='city' placeholder='City'/>

          {/* <InputField
            multiline={true}
            ref='other_input'
            placeholder='Other Input'
            helpText='this is an helpful text it can be also very very long and it will wrap' /> */}

          {/* <LinkField label="test test test" onPress={()=>{}}/> */}
          {/* <SwitchField label='I accept Terms & Conditions'
            ref="has_accepted_conditions"
            helpText='Please read carefully the terms & conditions'/> */}

            <DatePickerField placeholderStyle={styles.picker}
              ref='birthday'
              minimumDate={new Date('1/1/1900')}
              maximumDate={new Date()}
              placeholder='Birthday'/>

            <InputField ref='blood_type' placeholder='Blood Type'/>
            <InputField ref='allergies' placeholder='Allergies (comma-separated values)'/>

            <InputField ref='major_diagnosis'
                      multiline={true}
                      placeholder='Major Diagnosis'/>

            {/* <InputField ref='notes' placeholder='Notes'/> */}

            <InputField
              multiline={true}
              ref='notes'
              placeholder='Notes (Specify all other patient info)' />
          </Form>

          {/* onPress={this.handleFormChange.bind(this)} */}

          <Button
            onPress={this.registerPatient.bind(this)}
            title="Register Patient"
            color="#3399ff"
            accessibilityLabel="Register Patient"
          />

          {/* <Text>{JSON.stringify(this.state.formData)}</Text>
          <Text style={styles.message}>
            {this.state.message}
          </Text> */}
        </ScrollView>
      );
  }
};

// STYLESHEETS

const styles = StyleSheet.create({

  text_input_container: {
    flex: 1,
    // flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'powderblue'
  },
  message: {
    backgroundColor: 'white'
  },
  scrollingView: {
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    height:'100%',
    width: '100%'
  },
  picker: {
    backgroundColor: '#3399ff'
  }
});

module.exports = Register;
