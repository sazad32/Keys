import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,TextInput,
       Image, Button} from 'react-native';


export default class PasswordList extends Component<Props> {

 render() {
   return (
     <View>

         <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 100}}>
         <Image style={{width:90, height:90, resizeMode:'contain', marginBottom:60}}
           source={require('./assets/logo.png')}
         />
         </View>

     </View>
   );
 }
}
