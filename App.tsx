import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModelScreen';
import { Contador } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexBoxScreen } from './src/screens/FlexBoxScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { TareaScreen } from './src/screens/TareaScreen';



const App = () => {

  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:'#28425B'}}>
      {/* <HolaMundoScreen/>
      <Contador/> */}
      {/* <BoxObjectModel/> */}
      {/* <DimensionesScreen/> */}
      {/* <FlexBoxScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
    
  );
};
//El safe area view no se debe usar en el App si no en cada componente segun se requiera

export default App;
