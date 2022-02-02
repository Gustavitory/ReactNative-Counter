import React from 'react'
import { View,Text } from 'react-native'


export const HolaMundoScreen = () => {

    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            backgroundColor:'white'
        }}>
            <Text style={{
                fontSize:45,
                textAlign:'center',
                color:'black'
            }}>Primer Paso</Text>
        </View>
    )
}
