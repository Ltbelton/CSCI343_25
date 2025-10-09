import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Colors from "./constants/colors";
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';


SplashScreen.preventAutoHideAsync();

export default function App() {
  //Fonts. SplashScreen, and Loading
  const [loaded] = Font.useFonts({ 
    AmaticSCBold: require('./assets/fonts/AmaticSC-Bold copy.ttf') 
  });

  useEffect(()=> {
    if(loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //Handling State
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function setRepairTimeHandler(id) {
    // RadioGroup gives string ids; keep state numeric for indexing
    setRepairTimeId(Number(id));
  }

  function setServiceHandler(id){
    setServices((prev)=>
      prev.map((item)=> 
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setNewsletterHandler(v){
    setNewsletter(v);
  }

  function setRentalMembershipHandler(v){
    setRentalMembership(v);
  }

  function homeScreenHandler(){
    setCurrentPrice(0);
    setCurrentScreen("");
    setRepairTimeId(0);
    setNewsletter(false);
    setRentalMembership(false);
    setServices(prev => prev.map(s => ({ ...s, value: false })));

  }

  function orderReviewHandler(){
    let price = 0;

    // service time price
    price = price + repairTimeRadioButtons[repairTimeId].price;

    // selected services
    for (let i = 0; i < services.length; i++){
      if (services[i].value){
        price = price + services[i].price;
      }
    }

    // switches
    // newsletter is $0
    if (rentalMembership){
      price = price + 100;
    }

    setCurrentPrice(price);
    setCurrentScreen("Review");
  }
  
  let screen = (
    <HomeScreen
      // radios
      repairTimeRadioButtons={repairTimeRadioButtons}
      repairTimeId={repairTimeId}
      onSetRepairTimeId={setRepairTimeHandler}

      // checkboxes
      services={services}
      onSetServices={setServiceHandler}

      // switches
      newsletter={newsletter}
      onSetNewsletter={setNewsletterHandler}
      rentalMembership={rentalMembership}
      onSetRentalMembership={setRentalMembershipHandler}

      // nav
      onNext={orderReviewHandler}
    />
  );
  
  if (currentScreen === "Review"){
    screen = (
      <OrderReviewScreen
        // pass selections and subtotal; review screen can compute tax/total display
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        repairTimePrice={repairTimeRadioButtons[repairTimeId].price}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }
  
  //Rendering Screen
  if (!loaded){
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
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
