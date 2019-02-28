import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableHighlight} from 'react-native'

const TermsAndPolicy = ({navigation}) => {
    return (
        <View style={styles.modalContainer}>
        <Text>this is modal</Text>
        <TouchableHighlight onPress={() => navigation.goBack()}><Text> Back </Text></TouchableHighlight>
        </View>
    );
  }

  const styles = StyleSheet.create({
    modalContainer:{
        flex:1
    }
  })



  export default TermsAndPolicy


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
