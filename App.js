import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppPresenter from './src/app/presenter.js'
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Login from './src/app/login.js';
import Register from './src/app/register.js';
import Home from './src/app/home.js';
import QrReader from './src/app/qrReader.js';
import UserInfo from './src/app/userInfo.js';


//this is our index
export default class AppContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="qrReader" component={QrReader} title="QR Reader"/>
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Register} title="Register"/>
          <Scene key="userInfo" component={UserInfo} title="User Info" />
        </Scene>
      </Router>
    );
  }
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
