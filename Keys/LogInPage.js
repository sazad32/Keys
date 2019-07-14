import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,TextInput,
       Image, Button} from 'react-native';

export default class LogInPage extends Component<Props> {


  constructor(props){
    super(props);

    this.state = {text: ''};
  }

  onLogIn = () => {
      if(this.state.text == 'uneeb') {
        this.props.navigation.navigate('passwordList')
      }
    }


  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

          <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 100}}>
          <Image style={{width:90, height:90, resizeMode:'contain', marginBottom:60}}
            source={require('./assets/logo.png')}
          />
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

            <View style={{justifyContent:'center', margin:10}}>
              <Button onPress= {this.onLogIn} title='Log In' color='#008B8B'></Button>
            </View>





      </View>
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
