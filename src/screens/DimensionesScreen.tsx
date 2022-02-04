import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const DimensionesScreen = () => {
  return (
      <View style={styles.conteiner}>
          <View style={styles.cajaMorada}/>
          <View style={styles.cajaNaranja}/>
      </View>
  );
};

const styles = StyleSheet.create({
    cajaMorada:{
        backgroundColor:'#977FDB',
        height:100,

    },
    conteiner:{
        flex:1
    },
    cajaNaranja:{
        backgroundColor:'#80C8DB',
        height:150
    }
});
