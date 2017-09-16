import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,
  Modal, TouchableHighlight, Button, Image
 } from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


APP_LOGO = "https://facebook.github.io/react/img/logo_og.png";

// this could be in a seperate file too
// class TextField extends Component {
//   render() {
//     return (
//         <View>
//           <Text> {this.props.label}
//           </Text>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Type here"
//             onChangeText={(text) => this.setState({text})}
//           />
//         </View>
//     );
//   }
// }

class Registration extends Component {

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
    /*
    formData will contain all the values of the form,
    in this example.
    */

    // formData = {
    //   first_name:"",
    //   last_name:"",
    //   gender: '',
    //   country: '',
    //   city: '',
    //   birthday: Date,
    //   blood_type: '',
    //   allergies: '',
    //   major_diagnosis: '',
    //   notes: ''
    //   // has_accepted_conditions: bool
    // }

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
          style={{paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10, height:'100%', width: '100%'}}>
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
          {/* <Separator /> */}
          <PickerField style={[{backgroundColor: '#61d062'}]}
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

            <DatePickerField
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


          {/* <TimePickerField ref='alarm_time'
        placeholder='Set Alarm'/> */}
          {/* <DatePickerField ref='meeting'
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()} mode="datetime" placeholder='Meeting'/> */}
          </Form>

          {/* onPress={this.handleFormChange.bind(this)} */}

          <Button
            onPress={this.registerPatient.bind(this)}
            title="Register Patient"
            color="#841584"
            accessibilityLabel="Register Patient"
          />

          <Text>{JSON.stringify(this.state.formData)}</Text>
          <Text style={styles.message}>
            {this.state.message}
          </Text>
        </ScrollView>
      );
    // return (
    //   // Try setting `alignItems` to 'flex-start'
    //   // Try setting `justifyContent` to `flex-end`.
    //   // Try setting `flexDirection` to `row`.
    //   <View style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //     <View style={styles.text_input_container }>
    //       <TextField label="First Name:"/>
    //
    //       {/* <Text>First Name:
    //       </Text>
    //       <TextInput
    //         style={{height: 40}}
    //         placeholder="Type here"
    //         onChangeText={(text) => this.setState({text})}
    //       /> */}
    //
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Last Name:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Birthday:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Blood Type:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Gender:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Country:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="City:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Allergies:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Major Diagnosis:"/>
    //     </View>
    //     <View style={styles.text_input_container}>
    //       <TextField label="Notes: "/>
    //     </View>
    //   </View>
    // );
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
  }
});


module.exports = Registration;
