import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BasicText from './BasicText';
import Registration from './Registration';



// async REST call, id must come from QR code
// function getPatientRecord(id) {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {
        info: 'decoded QR code like Name, Birthday',
        details: 'NULL'
      }
    }
  }


  // call after page render
  componentDidMount() {
    // return fetch()

    // HTTP GET to server

    let patientID = 1;    // should be from QR decoded data

    fetch('https://jsonplaceholder.typicode.com/posts/' + String(patientID))
      .then((response) => response.json())
      .then((responseJson) => {
        // let responseJsonStr = JSON.stringify()
        this.setState({
          patient: {
            info: 'decoded QR code like Name, Birthday',
            details: 'JSON patient details from DB' + JSON.stringify(responseJson),
          }
        });
        // return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>

        {/* COMPONENTS */}

        {/* <Scanner /> */}
        <Registration />
        {/* <Login /> */}

        {/* sample for HTTP call */}

        {/* <BasicText text={this.state.patient.info} />
        <BasicText text={this.state.patient.details} /> */}
      </View>
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
