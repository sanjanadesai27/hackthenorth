import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, View, ScrollView,
  Modal, TouchableHighlight, Button, Image
 } from 'react-native';

 import { Form,
   Separator,InputField, LinkField,
   SwitchField, PickerField,DatePickerField,TimePickerField
 } from 'react-native-form-generator';

 import { Actions } from 'react-native-router-flux';

 APP_LOGO = "https://image.flaticon.com/icons/svg/503/503925.svg";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      message: '',
      debug: '',
      userAuth: {},
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

  loginUser(formData) {

    // https://jsonplaceholder.typicode.com/posts

    fetch('http://72a6f727.ngrok.io/auth/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.formData)
    })
      // .then((response) => response.json())

      .then((response) => {
        this.setState({
          debug: JSON.stringify(response)
        });

        responseJson = response.json();
        responseHeaders = response.headers;

        if (response["status"] !== 200) {
          this.setState({
            message: 'Errors: '
          });
        }
        else {    // successful

          // let responseJsonStr = JSON.stringify()
          this.setState({
            // message: 'Successful login' + JSON.stringify(responseJson),
            message: 'Successful login',
            formData: {},
            userAuth: {
              'access-token': responseHeaders['access-token'],
              'client': responseHeaders['client'],
              'token-type': responseHeaders['token-type'],
              'uid': responseHeaders['uid']
            }
          });

          // this.setState({
          //   message: 'Successful:' ,
          //   formData: {}
          // });

          Actions.qrReader();
        }

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

  handleFormChange(formData){
    this.setState({formData:formData});
    this.setMessageVisible(!this.state.modalVisible);   // hide message again
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  openTermsAndConditionsURL(){

  }

  render() {
    return (
        <ScrollView keyboardShouldPersistTaps="always"
          style={styles.scrollView}>

        <Form
            ref='loginForm'
            label="Login"
            onChange={this.handleFormChange.bind(this)} >

            {/* <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({username})}
              value={this.state.username}
            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({password})}
              value={this.state.password}
              secureTextEntry = {true}
            /> */}

            <View style={styles.spacer}>
            </View>

          <InputField ref='email'
            placeholder='Email:'
            valueStyle= {{color: 'red'}} />
          <InputField ref='password'
            placeholder='Password: '
            secureTextEntry = {true}/>
          </Form>

          {/* onPress={this.handleFormChange.bind(this)} */}

          <View style={styles.spacer}>
          </View>

          <Button
            style={styles.loginButton}
            onPress={this.loginUser.bind(this)}
            title="Login User"
            accessibilityLabel="Login User"
          />

          <View style={styles.spacer}>
          </View>

          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../styles/first-aid-kit.png")}
            />
          </View>

          {/* <Text>{JSON.stringify(this.state.formData)}</Text>
          <Text style={styles.message}>
            {this.state.message}
          </Text>
          <Text style={styles.message}>
            {this.state.debug}
          </Text> */}
        </ScrollView>
      );
  }
}

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
  loginButton: {
    color: "#841584"
  },
  scrollView: {
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    height:'100%',
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: '25%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  spacer: {
    backgroundColor: 'transparent',
    height: 50,
    width: '100%'
  },
});

module.exports = Login;
