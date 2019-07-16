import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,TextInput,
       Image, Button, ScrollView} from 'react-native';


export default class LogInPage extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {text: ''};
  }

  onLogIn = () => {
    console.log(this.state.text);
    this.setState({text: ""});
      if(this.state.text == 'uneeb') {
        this.props.navigation.navigate('passwordList')
      }
    }


  render() {

    const {navigate} = this.props.navigation;
    const scrollEnabled = true;
    return (
      <ScrollView style={{flex:1, backgroundColor: '#E0FFFF'}} scrollEnabled={scrollEnabled} keyboardShouldPersistTaps='always'>
      <View style={styles.container}>



          <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 100}}>
          <Image style={{width:90, height:90, resizeMode:'contain'}}
            source={require('./assets/logo.png')}
          />
          </View>

          <View style={{justifyContent:'center', flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: 'bold'}}>KEYS</Text>
         </View>

          <TextInput
              style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center'}}
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={(text) => this.setState({text})}
              autoCapitalize = {'none'}
              value={this.state.text}
              textAlign={'center'}
            />

            <View style={{justifyContent:'center', margin:10, flexDirection: 'row'}}>
              <Button onPress= {this.onLogIn} title='Log In' color='#008B8B'></Button>
              <Text style={{margin: 10}}>|</Text>
              <Button title='Sign Up' color='#008B8B'></Button>
            </View>

            <View style={{justifyContent:'center', flexDirection: 'row', marginBottom: 20}}>
                <Text>Forgot your password?</Text>
           </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
  },

});
