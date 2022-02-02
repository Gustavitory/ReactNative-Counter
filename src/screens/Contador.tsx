import React, { useState } from 'react'
import { Text, View} from 'react-native'
import { FButton } from '../components/FButton'


export const Contador = () => {
    const [cont,setCont]=useState<number>(0)

    const contar=(num:number)=>{
        setCont(cont+num)
    }

    return (
        <View style={{
            flex:1,
            backgroundColor:'white',
            justifyContent:'center'
        }}>
            <Text style={{
                textAlign:'center',
                fontSize:45,
                color:'black'
            }}>Contador:{cont}</Text>

            <FButton title='+' position='br' action={()=>contar(1)}/>
            <FButton title='-' position='bl' action={()=>contar(-1)} />

        </View>
    )
}
// const styles=StyleSheet.create({
//     button:{
//         alignItems:'center',
//         backgroundColor:'black',
//         padding:10,
//         borderRadius:5
//     },
//     text:{
//         color:'white',
//         fontSize:20,
//         alignSelf:'center'
//     },
//     floatButton:{
//         borderRadius:100,
//         backgroundColor:'red',
//         alignItems:'center',
//         padding:20,
//         justifyContent:'center',
//         position:'absolute',
//         bottom:0,
//         right:0,
//         margin:30,
//     }
// })
