import React, { useState } from 'react'
import { Text, View} from 'react-native'
import { FButton } from '../components/FButton'


export const Contador = () => {
    const [cont,setCont]=useState<number>(0)

    const contar=(num:number)=>{
        if(num<=0){
            if(cont!==0){
                setCont(cont+num)
            }
        }
        else{
          setCont(cont+num)  
        }        
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
            <FButton title='R' position='c' action={()=>contar(-1*cont)} />

        </View>
    )
}

