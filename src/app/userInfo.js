import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,
  Modal, TouchableHighlight, Button, Image
 } from 'react-native';

// import { Form,
//   Separator,InputField, LinkField,
//   SwitchField, PickerField,DatePickerField,TimePickerField
// } from 'react-native-form-generator';

APP_LOGO = "https://facebook.github.io/react/img/logo_og.png";


export default class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: '',
      userDetails: {},
      message: '',
      messageVisible: false
    }
  }

  setMessageVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // called before rendering
  // componentDidMount() {
  //   this.setState({
  //     formData: JSON.parse(this.props.data)
  //   });
  // }

  _getPatientDetails() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((responseJson) => {
        // let responseJsonStr = JSON.stringify()
        this.setState({
          // message: 'Successfully obtained' + JSON.stringify(responseJson),
          userDetails: responseJson
        });
        // this.setMessageVisible(!this.state.modalVisible);
      })
      .catch((error) => {
        this.setState({
          message: 'Error: ' + error
        });
        this.setMessageVisible(!this.state.modalVisible);
        console.error(error);
      });
  }

  render() {
    return (
          <View>
            <Text>
              {this.props.data}
             </Text>

            <Button
              onPress={this._getPatientDetails.bind(this)}
              title="Get Patient Details"
              color="#3399ff"
              accessibilityLabel="Get Patient Details"
            />
            <Text>{JSON.stringify(this.state.userDetails)}</Text>
            <Text style={styles.message}>
              {this.state.message}
            </Text>
        </View>
      );
  }
}


  // render() {
  //   return(
  //     <View>
  //       <Text>
  //         {this.props.data}
  //       </Text>
  //       <Button
  //         onPress={this._getPatientDetails.bind(this)}
  //         title="Get Patient Details"
  //         color="#841584"
  //         accessibilityLabel="Get Patient Details"
  //       />
  //     </View>
  //   );
  // }

  // STYLESHEETS

  const styles = StyleSheet.create({

    text_input_container: {
      flex: 1,
      // flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: '#3399ff'
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
    }
  });
