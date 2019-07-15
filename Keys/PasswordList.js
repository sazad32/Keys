import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, TouchableOpacity, Button, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import storage from './storage';

class FlatListItem extends Component<Props>{

  render(){

    return(
      <View >
          <TouchableOpacity  onPress={this.press} style = {{flex:1, borderWidth: 1 , margin: 5,  flexDirection: 'row'}}>

          <View style={{flex:1, padding: 5,flexDirection:'column'}}>
              <Text>{this.props.item.name}</Text>
              <Text>{this.props.item.username}</Text>
          </View>

          </TouchableOpacity>
      </View>
    );

  }
}

export default class PasswordList extends Component<Props>{

 constructor(props){
     super(props);
 }

 onNewEntry = () => {
   console.log("in new entry");
   //console.log(storage)
   this.props.navigation.navigate('newEntry')
 }

 render(){
   const {navigation} = this.props;
   const {navigate} = this.props.navigation;
   const items = navigation.getParam('items','');

   return(
     <View>
     <View style={{justifyContent:'center', flexDirection: 'row', margin: 10}}>
         <Text>Your currently saved  passwords</Text>
    </View>
    <View>
         <FlatList
           data={storage}
           extraData={this.props}
           renderItem={({item}) => {
           console.log({item});
           return (<FlatListItem item={item} navigate = {this.props.navigation}>

                  </FlatListItem>);
         }}/>
         <View style={{justifyContent:'center', margin:10}}>
           <Button onPress= {this.onNewEntry} title='New Entry' color='#008B8B'></Button>
         </View>

     </View>
     </View>
   );
 }
}
