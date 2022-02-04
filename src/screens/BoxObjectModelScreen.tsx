import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
  <View style={styles.conteiner}>
    <Text style={styles.title}>Box Object Model</Text>
  </View>);
};


const styles = StyleSheet.create({
    title:{
      fontSize:20,
      backgroundColor:'red',
      borderWidth:5,
      padding:30,
      width:300,
      alignSelf:'center',
      textAlign:'center'
    },
    conteiner:{
      backgroundColor:'blue',
      margin:20,
      flex:1,
      justifyContent:'center'
    }
});