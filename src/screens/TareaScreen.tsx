import React from 'react'
import { View,StyleSheet, useWindowDimensions } from 'react-native'

export const TareaScreen = () => {
    const {height}=useWindowDimensions()
    let disponible=height-200;

  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={[styles.cajaNaranja,/*{height:disponible}*/]}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28425B',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        top:100,
        right:90
        
    },
    cajaNaranja:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        top:50
        
    },
    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        bottom:100,
        left:90
        
    },
});