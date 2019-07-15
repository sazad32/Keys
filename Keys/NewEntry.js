import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,TextInput,
       Image, Button} from 'react-native';
import storage from './storage';

export default class NewEntry extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      username: '',
      password: ''
  }
}
  onEntry = () => {

    storage.push({name: this.state.name, username: this.state.username, password: this.state.password});
    //console.log(storage);
    this.props.navigation.navigate('passwordList',{items: storage})
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View>

        <TextInput
            style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center'}}
            placeholder='Name of Account'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            textAlign={'center'}
          />

          <TextInput
              style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center'}}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              textAlign={'center'}
            />

            <TextInput
                style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center'}}
                placeholder='Password'
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                textAlign={'center'}
              />

          <View style={{justifyContent:'center', margin:10}}>
            <Button onPress= {this.onEntry} title='Save' color='#008B8B'></Button>
          </View>

      </View>
    );
  }
}
