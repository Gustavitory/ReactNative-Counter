import React from 'react';
import { View, StyleSheet, Text,Dimensions, useWindowDimensions } from 'react-native';

export const DimensionesScreen = () => {
    // const {width,height}=Dimensions.get('window')
    const {width,height}=useWindowDimensions()
  return (
      <>
        <View style={styles.conteiner}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title}>W:{width} H:{height}</Text>
      </>
  );
};

const styles = StyleSheet.create({
    cajaMorada:{
        backgroundColor:'#977FDB',
        height:80,
        width:80,
        right:-100,
        bottom:-550

    },
    conteiner:{
        backgroundColor:'red',
        width:'100%',
        height:600
    },
    cajaNaranja:{
        height:80,
        width:80,
        backgroundColor:'blue',
        position:'absolute',
        right:100,
        top:550
    },
    title:{
        fontSize:20,
        color:'black'
    }
});
