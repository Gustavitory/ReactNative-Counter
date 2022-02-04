import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModelScreen';
import { Contador } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';



const App = () => {

  return (
    
    <SafeAreaView style={{flex:1}}>
      {/* <HolaMundoScreen/>
      <Contador/> */}
      {/* <BoxObjectModel/> */}
      <DimensionesScreen/>
    </SafeAreaView>
    
  );
};
//El safe area view no se debe usar en el App si no en cada componente segun se requiera

export default App;
