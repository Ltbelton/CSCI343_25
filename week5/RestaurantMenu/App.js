import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import BaseScreen from './screens/BaseScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/Colors';;


export default function App() {
  const [fontsLoaded] = useFonts({
    AlfaSlab:           require('./fonts/AlfaSlabOne-Regular.ttf'),
    SpartanRegular:     require('./fonts/LeagueSpartan-Regular.ttf'),
    SpartanSemiBold:    require('./fonts/LeagueSpartan-SemiBold.ttf'),
    SpartanBold:        require('./fonts/LeagueSpartan-Bold.ttf'),
  })
  
   const [currentScreen, setCurrentScreen] = useState("base");
   function menuScreenHandler(){
    setCurrentScreen("menu");
   }

   function baseScreenHandler(){
    setCurrentScreen("base");
   }

   let screen = <BaseScreen onNext={menuScreenHandler}/>;

   if (currentScreen == "menu"){
    screen = <MenuScreen onNext={baseScreenHandler}/>;
   }

   return(
    <>
    <StatusBar style ='light'/>    
    <SafeAreaProvider style ={styles.container}>{screen}</SafeAreaProvider>
    </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});