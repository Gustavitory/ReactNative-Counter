import React from 'react';
import { StyleSheet,View } from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style={styles.conteiner}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex:2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
        {/* <View style={{flex:7,backgroundColor:'black'}}/> */}
    </View>
  )};
/*
De esta seccion puedo concluir que el valor del flex determina que tanto tomara del espacio del padre 
cuando existan otros elementos dentro de el que tambien sean flex, entre mayor sea el valor
mayor sera la seccion que tomara proporcionalmente segun los valores de los demas, es
totalmente a escala del espacio disponible.
La ecuacion:
tenemos el flex 1, el flex 2 y el flex 3
en total nos da 1+2+3=6

entonces el flex 1 sera igual a:
    supongamos que estamos en column y que el heigh de nuestro padre es HP

    entonces el height del primero seria igual a : HP*(1/6)=HP*0,16=> esto sera igual al 16% de HP
    el del segundo: HP*(2/6) =HP*0,33=> esto es igual al 33% de HP
    el tercero: HP*(3/6)=HP*0,5=esto es igual al 50% de HP


####Flex-direction:
Solo hay 4 valores disponibles y determina si los elementos iran en fila o columna.
Valores disponibles:

    column(por defecto), inverse-column(como column pero ordena los elementos inversamente).

    row(Va en direccion horizontal), inverse-row(como row pero ordena los elementos inversamente).


####Justify-content:
Determina si los elementos dentro del flex van a estar alineados al inicio o final del padre,
ademas determina tambien la distancia que existira entra cada elemento entre ellos y con respecto al padre.
Valores disponibles:
    flex-start(por defecto):al inicio seria arriba y a la izquierda.

    flex-end:al final seria abajo y a la izquierda.

    center:justo en la distancia media entre inicio y fin.

    space-between: Distribuye de manera uniforme a los hijos desde el inicio hasta el final.

    space-around: Distribuye de manera unifome a los hijos teniendo una pequeña distancia tambien con
        el inicio y fin del padre.

    space-evenly: Distribuye de manera uniforme a los hijos teniendo la misma distancia entre inicio y
        fin que la que hay entre cada uno de los hijos.


*/
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        padding:20,
        flexDirection:'column'
    }
});
