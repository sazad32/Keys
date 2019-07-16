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

    var id = storage.length;
    id = id+1;
    storage.push({key: id, name: this.state.name, username: this.state.username, password: this.state.password});
    //console.log(storage);
    this.props.navigation.navigate('passwordList',{items: storage})
  }

  onGenerate = () => {

    var ranGen = Math.random().toString(36).substr(2, 7);
    this.setState({password: ranGen});
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={{backgroundColor:"#E0FFFF", flex: 1}}>

        <View style={{justifyContent:'center', flexDirection: 'row', margin: 10}}>
            <Text style={{fontSize: 20}}>Add a new Account</Text>
       </View>

      <View style={{justifyContent:'center', flexDirection: 'column', margin: 10, alignItems: 'center'}}>
        <TextInput
            style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center'}}
            placeholder='Name of Account'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            textAlign={'center'}
          />

          <TextInput
              style={{height: 40, width: 150, borderColor: 'black', borderWidth: 1, justifyContent: 'center', margin: 10}}
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
          </View>

          <View style={{justifyContent:'center', margin:10}}>
            <Button onPress= {this.onGenerate} title='Generate random password' color='#008B8B'></Button>
          </View>

          <View style={{justifyContent:'center', margin:10}}>
            <Button onPress= {this.onEntry} title='Save' color='#008B8B'></Button>
          </View>

      </View>
    );
  }
}
