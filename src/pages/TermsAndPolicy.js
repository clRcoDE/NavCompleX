import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const TermsAndPolicy = ({ navigation }) => {
  
onPressNavigator=()=>{
  navigation.goBack()
  }
  return (
    <View style={styles.modalContainer}>
      <View style={styles.termsTextWrapper}>
        <Text style={styles.boldText}>Terms of Service </Text>
        <Text style={styles.parentText}>
          Last updated: 2019/3/1 Please read these Terms of Service carefully
          before using the http://www.Paxiner.com website and the Paxiner Mobile
          App mobile Service operated by My Paxiner.Inc . Your access to and use
          of the Service is conditioned on your acceptance of and compliance
          with these Terms. These Terms apply to all visitors, users and others
          who access or use the Service. By accessing or using the Service you
          agree to be bound by these Terms. If you disagree{" "}
        
        with any part of the terms then you may not access the Service.
        </Text>
        <Text style={styles.boldText}>Termination </Text>
        <Text style={styles.parentText}>
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms. All provisions of the Terms which by
        their nature should survive termination shall survive termination,
        including, without limitation, ownership provisions, warranty
        disclaimers, indemnity and limitations of liability.
        </Text>
        <Text style={styles.boldText}>Subscriptions </Text>
        <Text style={styles.parentText}>
        Some parts of the Service are billed on a subscription basis . You will
        be billed in advance on a recurring ... The Subscriptions section is for
        SaaS businesses.
        </Text>
        <Text style={styles.boldText}>Content </Text>
        <Text style={styles.parentText}>
        Our Service allows you to post, link, store, share and otherwise make
        available certain information, text, graphics, videos, or other Content.
        You are responsible for the limited and Legal Usage.
        </Text>
      </View>
      <View style={styles.goBackWrapper}>
        <TouchableOpacity  style={styles.goBackButton} onPress={this.onPressNavigator.bind(this)}>
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1
  },
  termsTextWrapper:{
margin: 25
  },
  goBackWrapper: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: "600",
    fontSize: 24,
    color:'#333'
  },
  parentText: {
    flexDirection: "column"
  },
  goBackButton:{
 width:185,
 height:45,
 borderRadius: 100,
 backgroundColor:'#ccc',
 justifyContent: 'center',
 alignItems: 'center',
  }
});

export default TermsAndPolicy;

// import React, { Component } from 'react'
// import { Text, StyleSheet, View ,TouchableHighlight} from 'react-native'

// export default class TermsAndPolicy extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//         <TouchableHighlight onPress={() => this.props.navigation.goBack()}><Text> Back </Text></TouchableHighlight>
//       </View>
//     )
//   }
// }
