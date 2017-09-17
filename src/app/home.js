import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

 APP_LOGO = "https://image.flaticon.com/icons/svg/503/503925.svg";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bannerTitle}> Docify </Text>
        {/* <Text style={styles.bannerSubTitle}> Docify </Text> */}

        <Button
          onPress={ () => Actions.login() }
          title="Login"
          colour="#841584"
        />
        <View style={styles.spacer}>
        </View>
        <Button
          onPress={ () => Actions.register() }
          title="Register"
          colour="#841584"
        />
        <View style={styles.spacer}>
        </View>
        <Button
        onPress={ () => Actions.qrReader() }
        title="QR Reader"
        colour="#841584"
        />
        <View style={styles.spacer}>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../styles/first-aid-kit.png")}
          />
        </View>

      </View>
    );
  }
}


// STYLESHEETS

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // flexDirection: 'row',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    width: '100%',
    height: '100%',
    // backgroundColor: '#B0E0E6'
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
  spacer: {
    backgroundColor: 'transparent',
    height: 50,
    width: '100%'
  },
  bannerTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 25,
  },
  bannerSubTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: '25%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
