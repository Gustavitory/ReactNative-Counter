import React from 'react';
import { StyleSheet ,Text, View,TouchableNativeFeedback} from 'react-native';

interface FButtonProps{
    position:'br'|'bl',
    title:String,
    action:()=>void
}

export const FButton = (props:FButtonProps) => {
    const {position,title,action}=props
  return (
    <View style={[styles.button,(position==='bl')?styles.fabLocationBL:styles.fabLocationBR]}>
        <TouchableNativeFeedback  onPress={action} background={TouchableNativeFeedback.Ripple('white',true,30)}>
            <View style={styles.fab}>
                <Text style={styles.text}> {title} </Text>
            </View>                
        </TouchableNativeFeedback>

    </View>
)
};

const styles=StyleSheet.create({
    button:{
        position:'absolute',
        bottom:25
    },
    fabLocationBR:{
        right:25
    },
    fabLocationBL:{
        left:25
    },
    fab:{
        backgroundColor:'red',
        width:60,
        height:60,
        justifyContent:'center',
        borderRadius:100,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.30,
        shadowRadius:4.65,
        elevation:10
    },
    text:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})
