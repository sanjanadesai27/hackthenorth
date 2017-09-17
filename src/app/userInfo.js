import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,
  Modal, TouchableHighlight, Button, Image, Linking
 } from 'react-native';

 import { Actions } from 'react-native-router-flux';

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
      userInfo: {},
      message: '',
      messageVisible: false,
      detailsLink: ''
    }
  }

  setMessageVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // called before rendering
  componentDidMount() {

    var urlString1 = this.props.data;
    var urlString = urlString1.split('url=>"')[1].split('"}')[0];

    var first_name = urlString1.split('first_name"=>"')[1].split('", "last_name"')[0];
    var last_name = urlString1.split('last_name"=>"')[1].split('", "birthday"')[0];
    var blood_type = urlString1.split('blood_type"=>')[1].split(', "allergies"')[0];
    var major_diagnostics = urlString1.split('major_diagnostics"=>')[1].split(', :id')[0];
    var id = urlString1.split('id=>"')[1].split('", :url')[0];

    // "http://72a6f727.ngrok.io/web/user/JDR551CVRZ"

    this.setState({
      message: urlString,
      detailsLink: urlString,
      userInfo: {
        first_name: first_name,
        last_name: last_name,
        blood_type: blood_type,
        major_diagnostics: major_diagnostics,
        id: id
      }
      // formData: JSON.parse(this.props.data)
    });
  }

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
          <View style={styles.container}>
            {/* <Text>
              {this.props.data}
             </Text> */}

             <Text style={styles.field}>
               First name: {this.state.userInfo.first_name}
             </Text>
             <Text style={styles.field}>
               Last name: {this.state.userInfo.last_name}
             </Text>
             <Text style={styles.field}>
               Blood Type: {this.state.userInfo.blood_type}
             </Text>
             <Text style={styles.field}>
               Major Diagnostics: {this.state.userInfo.major_diagnostics}
             </Text>
             <Text style={styles.field}>
               ID: {this.state.userInfo.id}
             </Text>
             <View style={styles.spacer}>
             </View>
            <Button
              // onPress={this._getPatientDetails.bind(this)}
              onPress={() => Linking.openURL(this.state.detailsLink)}
              title="Get Patient Details"
              color="#3399ff"
              accessibilityLabel="Get Patient Details"
            />

            <View style={styles.spacer}>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../styles/first-aid-kit.png")}
              />
            </View>

            {/* <Text>{JSON.stringify(this.state.userDetails)}</Text>
            <Text style={styles.message}>
              {this.state.message}
            </Text> */}
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
    },
    field: {
      paddingLeft:10,
      paddingTop:10,
      fontSize: 20,
    },
    spacer: {
      backgroundColor: 'transparent',
      height: 50,
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
    }
  });
