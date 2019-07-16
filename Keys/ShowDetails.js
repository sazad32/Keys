import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, TouchableOpacity, Button, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import storage from './storage';

export default class ShowDetails extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.navigation.getParam('item','').key,
    };

  }

  onDelete = () => {
    for( var i = 0; i < storage.length; i++){
     if (storage[i].key === this.state.id) {
       storage.splice(i, 1);
       break;
     }
    }
    console.log(storage);
    this.props.navigation.navigate('passwordList',{items: storage})
  }

  
  render() {

    const {navigation} = this.props;
    const {navigate} = this.props.navigation;


    const item = navigation.getParam('item','');

    return (

      <View style={styles.container}>

          <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 100}}>
            <Text style={styles.letters}>
              App Name: {item.name}
            </Text>
            <Text style={styles.letters}>
              Username: {item.username}
            </Text>
            <Text style={styles.letters}>
              Password: {item.password}
            </Text>
          </View>

            <View style={{justifyContent:'center', margin:30}}>
              <Button onPress={this.onDelete} title='Delete' color='#8B0000'></Button>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  letters: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }

});
