import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, TouchableOpacity, Button, FlatList, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import storage from './storage';

class FlatListItem extends Component<Props>{

  press = () => {
      this.props.navigate.navigate('showDetails', {item: this.props.item});
  }

  render(){

    return(

      <View >
          <TouchableOpacity  onPress={this.press} style = {{flex:1, borderWidth: 2, margin: 5,  flexDirection: 'row'}}>

          <View style={{flex:1, padding: 5,flexDirection:'column'}}>
              <Text style={styles.letters}>{this.props.item.name}</Text>
              <Text style={styles.letters}>{this.props.item.username}</Text>
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
   //console.log(storage)
   this.props.navigation.navigate('newEntry')
 }

 onLogOut = () => {
   //console.log(storage)
   this.props.navigation.navigate('login')
 }

 render(){
   const {navigation} = this.props;
   const {navigate} = this.props.navigation;
   const items = navigation.getParam('items','');
   const scrollEnabled = true;

   return(
     <ScrollView style={{flex:1, backgroundColor: '#E0FFFF'}} scrollEnabled={scrollEnabled} keyboardShouldPersistTaps='always'>
     <View style={styles.container}>
     <View style={{justifyContent:'center', flexDirection: 'row', margin: 10}}>
         <Text style={{fontSize: 20}}>Your currently saved passwords</Text>
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


     </View>

     <View style={{justifyContent:'center', margin:10}}>
       <Button onPress= {this.onNewEntry} title='New Entry' color='#008B8B'></Button>
     </View>

     <View style={{justifyContent:'center', margin:10}}>
       <Button onPress= {this.onLogOut} title='Log Out' color='#008B8B'></Button>
     </View>

     </View>
     </ScrollView>


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
